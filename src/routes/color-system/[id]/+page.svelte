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
    <h1 id="system-title">{system.name}</h1>
    <p class="system-description">{system.description}</p>
  </header>
  
  <div class="color-groups" aria-labelledby="system-title">
    {#each system.colorGroups as group}
      <ColorGroup group={group} />
    {/each}
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
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  .system-header h1 {
    font-family: 'Inter', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .system-description {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-muted);
    margin-bottom: 1rem;
    max-width: 800px;
  }
  
  /* External link styling (kept for future use) */
  .system-link {
    font-family: 'Inter', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
  }
  
  .system-link:hover {
    text-decoration: underline;
  }
  
  /* Color groups grid layout */
  .color-groups {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .system-header h1 {
      font-size: 2rem;
    }
    
    .system-description {
      font-size: 1rem;
    }
  }
</style> 