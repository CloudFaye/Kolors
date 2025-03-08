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
      <a href={system.url} target="_blank" rel="noopener noreferrer" class="system-link">
        View official documentation
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
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
    margin-bottom: 0.5rem;
  }
  
  .system-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
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