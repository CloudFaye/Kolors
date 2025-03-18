<script lang='ts'>
import '../app.css'
import '$lib/styles/global.css';
import ToastContainer from '$lib/components/ToastContainer.svelte';
import ThemeToggle from '$lib/components/ThemeToggle.svelte';
import Navbar from '$lib/components/Navbar.svelte';
import WIPButton from '$lib/components/WIPButton.svelte';
import WIPPopup from '$lib/components/WIPPopup.svelte';
import { onMount } from 'svelte';
import { page } from '$app/stores';

let { children } = $props()

// SEO: Add structured data for rich snippets
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "ColorSystems",
  "description": "Explore color systems from popular design systems and brand guidelines",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Faye Seun"
  },
  "url": "https://colorsystems.netlify.app/"
};

// Insert structured data into the document head
onMount(() => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
});
</script>

<Navbar />
<main id="main-content">
  <div class="container">
    {@render children()}
  </div>
</main>

<footer>
  <div class="flex items-center justify-center">
    <p>© {new Date().getFullYear()} Kolors by <a href="https://github.com/cloudfaye" aria-label="Faye Seun's GitHub profile">Faye Seun</a></p>
  </div>
</footer>

<ToastContainer />

<style>
  /* Header styling */
  header {
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  
  /* Footer styling */
  footer {
    margin-top: 3rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.75rem;
    padding-top: 0.5rem;
    height: fit-content;
    padding-left: 1rem;
  }
  
  /* Logo styling */
  .logo a {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0;
  }
  
  /* Navigation styling */
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
  
  /* Main content area */
  main {
    min-height: calc(100vh - 200px);
    padding: 2rem 0;
  }
  
  /* Responsive adjustments */
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