<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let { message, duration = 2000, type = 'success' } = $props<{
    message: string;
    duration?: number;
    type?: 'success' | 'error' | 'info';
  }>();
  
  let visible = $state(false)
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

<div class="toast {type} {visible ? 'visible' : ''}">
  <div class="toast-content">
    {#if type === 'success'}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    {:else if type === 'error'}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    {/if}
    <span class="toast-message">{message}</span>
  </div>
</div>

<style>
  .toast {
    color: white;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: var(--radius-md);
    padding: 12px 8px;
    z-index: 1000;
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    max-width: 90%;
    width: auto;
  }
  
  .toast.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  
  .toast-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .toast-message {
    font-size: 0.9rem;
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
    }
  }
</style> 