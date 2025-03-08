<script lang="ts">
  import type { PageData } from './$types';
  import ColorGroup from '$lib/components/ColorGroup.svelte';
  
  export let data: PageData;
  const { system } = data;
</script>

<svelte:head>
  <title>{system.name} | ColorSystems</title>
</svelte:head>

<div class="system-container">
  <header class="system-header">
    <h1>{system.name}</h1>
    <p class="system-description">{system.description}</p>
    <a href={system.url} target="_blank" rel="noopener noreferrer" class="system-link">
      View official documentation
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  </header>
  
  <div class="color-groups">
    {#each system.colorGroups as group}
      <ColorGroup group={group} />
    {/each}
  </div>
</div>

<style>
  .system-container {
    max-width: 100%;
    margin: 0 auto;
  }
  
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
  
  .color-groups {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    .system-header h1 {
      font-size: 2rem;
    }
    
    .system-description {
      font-size: 1rem;
    }
  }
</style> 