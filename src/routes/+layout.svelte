<script lang='ts'>
import '$lib/styles/global.css';
import ToastContainer from '$lib/components/ToastContainer.svelte';
import ThemeToggle from '$lib/components/ThemeToggle.svelte';

let { children } = $props()
</script>

<header>
  <div class="container">
    <div class="flex justify-between items-center">
      <div class="logo">
        <h1>ColorSystems</h1>
      </div>
      <nav>
        <ul class="flex gap-md items-center">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/custom" class="nav-link">Custom Colors</a></li>
          <li><a href="/about" class="nav-link">About</a></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<main>
  <div class="container">
    {@render children()}
  </div>
</main>

<footer>
  <div class="container">
    <p>© {new Date().getFullYear()} ColorSystems - Explore design system colors by <a href="https://github.com/cloudfaye">Adefaye O Samuel</a></p>
  </div>
</footer>

<ToastContainer />

<style>
  header, footer {
    padding: 1.5rem 0;
  }
  
  header {
  
    border-bottom: 1px solid var(--border-color);
    color: white;
  }
  
  footer {
    margin-top: 3rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.9rem;
  }
  
  .logo h1 {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0;
    color: white;
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  .nav-link {
    color: white;
    font-weight: 500;
    transition: opacity 0.2s ease;
  }
  
  .nav-link:hover {
    color: white;
    opacity: 0.8;
  }
  
  main {
    min-height: calc(100vh - 200px);
    padding: 2rem 0;
  }
  
  @media (max-width: 768px) {
    .logo h1 {
      font-size: 1.4rem;
    }
    
    header .flex {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
</style>