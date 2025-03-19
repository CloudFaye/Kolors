<script lang='ts'>
import { colorSystems } from '$lib/data/colorSystems';

// Sort color systems alphabetically by name
const sorted = [...colorSystems].sort((a, b) => a.name.localeCompare(b.name));
</script>

<div class="color-systems-grid">
  {#if !sorted.length}
    <div class="loading">
      <p>Pulling colors from pouch.....</p>
    </div>
  {:else}
    {#each sorted as system}
      <a href="/color-system/{system.id}" class="color-card" aria-label="{system.name} color system">
        <div class="color-preview">
          {#each system.colorGroups.slice(0, 1) as group}
            <div class="preview-group">
              {#each group.shades.slice(0, 5) as shade}
                <div class="preview-color" style="background-color: {shade.value};"></div>
              {/each}
            </div>
          {/each}
        </div>
        <div class="color-name">{system.name}</div>
      </a>
    {/each}
  {/if}
</div>

<style>
  .color-systems-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 2.5rem;
  }
  
  .loading {
    grid-column: 1 / -1;
    text-align: center;
    padding: 2rem;
  }
  
  .color-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease;
    padding-bottom: 18px;
    border-radius: 8px;
  }
  
  .color-card:hover {
    transform: translateY(-4px);
    background-color: var(--surface-color);

  }
  
  .color-preview {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .preview-group {
    display: flex;
    height: 60px;
  }
  
  .preview-color {
    flex: 1;
  }
  
  .color-name {
    font-size: 0.85rem;
    text-align: center;
    font-weight: 400;
    color: var(--text-color, #333);
  }
  
  @media (max-width: 768px) {
    .color-systems-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .color-systems-grid {
      grid-template-columns: 1fr;
    }
  }
</style>


