<script lang="ts">
  import type { ColorSystem as ColorSystemType } from '$lib/data/colorSystems';
  import ColorGroup from './ColorGroup.svelte';
  
  let { system, expanded = false } = $props<{
    system: ColorSystemType;
    expanded?: boolean;
  }>();
  
  let isExpanded = $state(expanded);
</script>

<section class="color-system" id={system.id}>
  <header class="system-header">
    <div class="system-info">
      <h2>{system.name}</h2>
      <p class="system-description">{system.description}</p>
    </div>
    <button class="toggle-button" onclick={() => isExpanded = !isExpanded}>
      {isExpanded ? 'Collapse' : 'Expand'}
    </button>
  </header>
  
  {#if isExpanded}
    <div class="color-groups">
      {#each system.colorGroups as group}
        <ColorGroup group={group} />
      {/each}
    </div>
  {/if}
</section>

<style>
  .color-system {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    transition: box-shadow 0.3s ease;
    background-color: var(--surface-color);
  }
  
  .color-system:hover {
    box-shadow: 0 4px 12px var(--shadow-color);
  }
  
  .system-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
  
  .system-info {
    max-width: 80%;
  }
  
  .system-info h2 {
    margin-bottom: 0.5rem;
  }
  
  .system-description {
    color: var(--text-muted);
    margin-bottom: 0;
  }
  
  .toggle-button {
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s ease;
  }
  
  .toggle-button:hover {
    background-color: var(--hover-color);
  }
  
  .color-groups {
    animation: fadeIn 0.3s ease;
    margin-top: 1.5rem;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .system-header {
      flex-direction: column;
      gap: 1rem;
    }
    
    .system-info {
      max-width: 100%;
    }
  }
</style> 