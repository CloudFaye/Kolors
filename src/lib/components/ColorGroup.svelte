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
      <ColorCard shade={shade} />
    {/each}
  </div>
</div>

<style>
  .color-group {
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: var(--background-color);
  }
  
  .group-header {
    margin-bottom: 1rem;
  }
  
  .group-header h3 {
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  
  .description {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 0;
  }
  
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .color-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
  }
</style> 