<script lang="ts">
  import { colorSystems } from '$lib/data/colorSystems';

  // Sort color systems alphabetically by name for consistent display
  const sortedColorSystems = [...colorSystems].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  // Count unique colors (hex values) in a color system
  // This function is currently unused but kept for potential future features
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
  <title>Kolors - Color System Explorer</title>
  <meta name="description" content="Explore color systems from popular design systems and brands. Compare, contrast, and get inspiration for your next project." />
</svelte:head>

<section class="hero" aria-labelledby="main-heading">
  <h1 id="main-heading">Color Systems</h1>
  <p class="lead">
    Explore color systems from popular design systems and brands. Compare, contrast, and get inspiration for your next project.
  </p>
</section>

<section class="color-systems-list" aria-label="Color systems gallery">
  <ul>
    {#each sortedColorSystems as system}
      <li>
        <a href="/color-system/{system.id}" class="system-card" aria-label="{system.name} color system">
          <div class="system-info">
            <h2 class='system-name'>{system.name}</h2>
            <p>{system.description}</p>
          </div>
          
          <div class="color-preview" aria-hidden="true">
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
  /* Base section styling */
  section {
    margin-bottom: 2.5rem;
  }
  
  /* Hero section styling */
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
    font-size: 1rem;
    color: var(--text-muted);
    max-width: 760px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  /* Color systems grid layout */
  .color-systems-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
  }
  
  /* Card styling */
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
  
  /* Card content styling */
  .system-info {
    margin-bottom: 0.75rem;
  }
  
  .system-info h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
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
  
  /* Color preview styling */
  .color-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    margin-top: auto;
  }
  
  .preview-group {
    display: flex;
    height: 12px;
    border-radius: 1px;
    overflow: hidden;
  }
  
  .preview-color {
    flex: 1;
  }
  
  /* Media queries for responsive design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
    .color-systems-list ul {
      grid-template-columns: 1fr;
    }
  }
</style>
