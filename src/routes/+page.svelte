<script lang="ts">
	import ColorSystemCard from '$lib/components/ColorSystemCard.svelte';
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

<section>
  <ColorSystemCard />
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
    font-size: 1rem;
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
    
    border-radius: 8px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.033);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
    
  }
</style>
