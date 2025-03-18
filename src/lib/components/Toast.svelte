<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  
  let { message, duration = 3000, type = 'success' } = $props<{
    message: string;
    duration?: number;
    type?: 'success' | 'error' | 'info';
  }>();
  
  let visible = $state(false);
  let timer: ReturnType<typeof setTimeout>;
  
  onMount(() => {
    visible = true;
    timer = setTimeout(() => {
      visible = false;
    }, duration);
  });
  
  onDestroy(() => {
    clearTimeout(timer);
  });
</script>

{#if visible}
  <div 
    class="toast {type}"
    transition:fly={{ x: 20, duration: 400, easing: (t) => {
      // Custom cubic bezier easing for natural feel
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }}}
  >
    <div class="toast-content">
      <div class="toast-icon">
        {#if type === 'success'}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        {:else if type === 'error'}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        {/if}
      </div>
      <span class="toast-message">{message}</span>
    </div>
  </div>
{/if}

<style>
  .toast {
    position: relative;
    background-color: white;
    color: #333;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 14px 16px;
    z-index: 1000;
    width: auto;
    min-width: 280px;
    max-width: 420px;
    margin-bottom: 10px;
    pointer-events: auto;
  }
  
  .toast-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .toast-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .toast-message {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.4;
  }
  
  .toast.success {
    border-left: 4px solid #10b981;
  }
  
  .toast.success svg {
    color: #10b981;
  }
  
  .toast.error {
    border-left: 4px solid #ef4444;
  }
  
  .toast.error svg {
    color: #ef4444;
  }
  
  .toast.info {
    border-left: 4px solid #3b82f6;
  }
  
  .toast.info svg {
    color: #3b82f6;
  }
  
  @media (prefers-color-scheme: dark) {
    .toast {
      background-color: #2a2a2a;
      color: #f5f5f5;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }
</style> 