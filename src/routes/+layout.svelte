<script lang='ts'>
import '../app.css'
import '$lib/styles/global.css';
import ToastContainer from '$lib/components/ToastContainer.svelte';
import ThemeToggle from '$lib/components/ThemeToggle.svelte';
import Navbar from '$lib/components/Navbar.svelte';

let { children } = $props()
</script>

<Navbar />
<main>
  <div class="container ">
    {@render children()}
  </div>
</main>

<footer>
  <div class="">
    <p>© {new Date().getFullYear()} ColorSystems - Explore design system colors by <a href="https://github.com/cloudfaye">Faye Seun</a></p>
  </div>
</footer>

<ToastContainer />

<style>
  header {
    padding: 0.8rem 0;
  }
  
  header {
  
    border-bottom: 1px solid var(--border-color);
   
  }
  
  footer {
    margin-top: 3rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.75rem;
    padding-top: 0.5rem;
    height: fit-content;
    padding-left: 1rem;
   
    
  }
  
  .logo a {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0;
   
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  .nav-link {
  
    font-weight: 500;
    transition: opacity 0.2s ease;
  }
  
  .nav-link:hover {
    
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