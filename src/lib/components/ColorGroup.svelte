<script lang="ts">
  import type { ColorGroup as ColorGroupType } from '$lib/data/colorSystems';
  import ColorCard from './ColorCard.svelte';
  
  let { group } = $props<{
    group: ColorGroupType;
  }>();
</script>

<div class="color-group">
  <header class="group-header">
    <h3>{group.name}</h3>
    {#if group.description}
      <p class="description">{group.description}</p>
    {/if}
  </header>
  
  <div class="color-grid">
    {#each group.shades as shade}
      <ColorCard shade={shade} size="small" />
    {/each}
  </div>
</div>

<style>
  .color-group {
    margin-bottom: 1.5rem;
    padding: 0.75rem;
    border-radius: 6px;
    background-color: var(--surface-color, #1e1e1e);
    height: fit-content;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .group-header {
    margin-bottom: 0.75rem;
  }
  
  .group-header h3 {
    margin-bottom: 0.2rem;
    font-weight: 600;
    font-size: 1rem;
  }
  
  .description {
    color: var(--text-muted);
    font-size: 0.8rem;
    margin-bottom: 0;
  }
  
  .color-grid {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    flex: 1;
  }
  
  @media (max-width: 768px) {
    .group-header h3 {
      font-size: 0.9rem;
    }
  }
</style> 