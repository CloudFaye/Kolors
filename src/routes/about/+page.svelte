<script lang="ts">
  // About page component displaying information about the Kolors project
</script>

<svelte:head>
  <title>About Kolors - Color System Explorer</title>
  <meta name="description" content="Learn about the Kolors project, a tool for exploring color systems from popular design systems and brands." />
</svelte:head>

<div class="about-page">
  <h1 id="about-heading">About Kolors</h1>
  
  <div class="card about-section" aria-labelledby="what-is-kolors">
    <h2 id="what-is-kolors">What is Kolors?</h2>
    <p>
      Pronounced 'colors', Kolors is a creative playground for exploring and comparing color systems
      from top design frameworks and iconic brand palettes.
    </p>
    <p>
      Color is a fundamental aspect of design. Major brands and design systems have carefully crafted their color
      palettes to express their identity and ensure accessibility across various platforms. By bringing these 
      systems together, it's easier to see common patterns between different brand colors and general accessible colors in use.
    </p>
    <p>
      This is a carefully curated list of color systems, featuring brands with products and digital experiences that serve millions of users.
      Also included are brands that may be less well-known but have unique and interesting color palettes.
    </p>
  </div>
  
  <div class="card about-section" aria-labelledby="sources-heading">
    <h2 id="sources-heading">Sources & Attribution</h2>
    <p>
      All color systems displayed on this site are based on publicly available information from the respective
      organizations. Appropraite links for each color system will be provided. This tool is for educational
      and reference purposes only.
    </p>
  </div>

  <div class="card about-section" aria-labelledby="disclaimer-heading">
    <h2 id="disclaimer-heading">Disclaimer</h2>
    <p>
      Please note that some information may be incomplete or outdated as brands update their design systems. 
      This list is continuously being updated with the latest color systems and interesting new discoveries in the design world.
    </p>
  </div>

  <div class="card about-section" aria-labelledby="feedback-heading">
    <h2 id="feedback-heading">Suggestions and Feedback</h2>
    <p>
      Kolors is a WIP 🚧. If you have suggestions, feedback, or would like to see a specific brand or design system featured, 
      please <a class='underline' href="https://x.com/fayeseun_" target="_blank" rel="noopener noreferrer" aria-label="Contact Faye Seun on X (formerly Twitter)">Find me here, Send a DM</a>.
    </p>
  </div>
</div>

<style>
  /* Main container styling */
  .about-page {
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Heading styles */
  h1 {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  /* Section styling */
  .about-section {
    margin-bottom: 2rem;
  }
  
  /* List styling (retained for future use) */
  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  /* Link styling */
  .underline {
    text-decoration: underline;
  }
</style> 