<script lang="ts">
  import { toasts } from '$lib/stores/toast';
  import Toast from './Toast.svelte';
  import { flip } from 'svelte/animate';
</script>

<div class="toast-container">
  {#each $toasts as toast (toast.id)}
    <div animate:flip={{ duration: 300 }} class="toast-wrapper">
      <Toast message={toast.message} type={toast.type} duration={toast.duration} />
    </div>
  {/each}
</div>

<style>
  .toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    pointer-events: none;
    z-index: 1000;
    max-width: 420px;
  }
  
  .toast-wrapper {
    pointer-events: auto;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    .toast-container {
      right: 10px;
      left: 10px;
      align-items: center;
    }
  }
</style> 