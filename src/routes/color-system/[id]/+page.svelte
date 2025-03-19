<script lang="ts">
  import type { PageData } from './$types';
  import ColorGroup from '$lib/components/ColorGroup.svelte';
  
  export let data: PageData;
  const { system } = data;
</script>

<svelte:head>
  <title>{system.name} Color System - Kolors</title>
  <meta name="description" content="Explore the {system.name} color system - {system.description}" />
</svelte:head>

<div class="system-container">
  <header class="system-header">
    <div class="header-content">
      <div class="header-text">
        <h1 id="system-title">{system.name}</h1>
        <p class="system-description">{system.description}</p>
      </div>
     
    </div>
  </header>
  
  <div class="palette-section">
    
    <div class="color-groups" aria-labelledby="system-title">
      {#each system.colorGroups as group, i (group.name)}
        <div class="group-wrapper">
          <ColorGroup group={group} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Container styling */
  .system-container {
    max-width: 100%;
    margin: 0 auto;
  }
  
  /* Header section styling */
  .system-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
  
 
  .header-text {
    flex: 1;
  }
  
 

  .system-header h1 {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  
  .system-description {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--text-muted);
    margin-bottom: 0.75rem;
    max-width: 800px;
  }
  
  /* Palette section */
  .palette-section {
    margin-bottom: 2rem;
  }
  
  .palette-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
  }
  
  /* Color groups layout - 3-column grid */
  .color-groups {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .group-wrapper {
     /* Prevents flex items from overflowing */
    display: flex;
    width: 100%;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .color-groups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      gap: 1rem;
         }
    
    .header-text {
      width: 100%;
    }
    
   
    
    .system-header h1 {
      font-size: 1.75rem;
    }
    
    .system-description {
      font-size: 0.9rem;
    }
    
    .color-groups {
      grid-template-columns: 1fr;
    }
  }
</style> 