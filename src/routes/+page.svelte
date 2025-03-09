<script lang="ts">
  import { colorSystems } from '$lib/data/colorSystems';

  // Function to count unique colors (hex values) in a color system
  function countUniqueColors(system: { id?: string; name?: string; description?: string; url?: string; colorGroups: any; }) {
    const uniqueColors = new Set();
    
    system.colorGroups.forEach((group: { shades: any[]; }) => {
      group.shades.forEach((shade: { value: string; }) => {
        uniqueColors.add(shade.value.toLowerCase());
      });
    });
    
    return uniqueColors.size;
  }
</script>

<svelte:head>
  <title>ColorSystems | Explore Design System Colors</title>
</svelte:head>

<section class="hero">
  <h1>Color Explorer</h1>
  <p class="lead">
    Explore color systems from popular design systems and brand guidelines. Compare, contrast, and get inspiration for your next project.
  </p>
</section>

<section class="color-systems-list">
  <ul>
    {#each colorSystems as system}
      <li>
        <a href="/color-system/{system.id}" class="system-card">
          <div class="system-info">
            <h2>{system.name}</h2>
            <p>{system.description}</p>
          </div>
          
          <div class="color-meta">
            <span class="color-count">{countUniqueColors(system)} unique colors</span>
          </div>
          
          <div class="color-preview">
            {#each system.colorGroups.slice(0, 2) as group}
              <div class="preview-group">
                {#each group.shades.slice(0, 5) as shade}
                  <div class="preview-color" style="background-color: {shade.value};"></div>
                {/each}
              </div>
            {/each}
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin-bottom: 2.5rem;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 3.5rem;
  }
  
  .hero h1 {
    font-family: 'Inter', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  
  .lead {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    color: var(--text-muted);
    max-width: 760px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .color-systems-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
  }
  
  .system-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: inherit;
    background-color: var(--surface-color, white);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    padding: 1.5rem;
  }
  
  .system-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.08);
  }
  
  .system-info {
    margin-bottom: 0.75rem;
  }
  
  .system-info h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .system-info p {
    font-family: 'Inter', sans-serif;
    color: var(--text-muted);
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .color-meta {
    margin-bottom: 1rem;
  }
  
  .color-count {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary-color);
    background-color: rgba(76, 110, 245, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    display: inline-block;
  }
  
  .color-preview {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 0.5rem;
    margin-top: auto;
  }
  
  .preview-group {
    display: flex;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
  }
  
  .preview-color {
    flex: 1;
  }
  
  .card-arrow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--primary-color);
    opacity: 0.7;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  
  .system-card:hover .card-arrow {
    opacity: 1;
    transform: translateX(4px);
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
    .lead {
      font-size: 1.1rem;
      padding: 0 1rem;
    }
    
    .color-systems-list ul {
      grid-template-columns: 1fr;
    }
  }
</style>
