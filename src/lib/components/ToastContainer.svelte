<script lang="ts">
  import { toasts } from '$lib/stores/toast';
  import Toast from './Toast.svelte';
</script>

<div class="toast-container">
  {#each $toasts as toast (toast.id)}
    <Toast message={toast.message} type={toast.type} duration={toast.duration} />
  {/each}
</div>

<style>
  .toast-container {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    pointer-events: none;
    z-index: 1000;
  }
</style> 