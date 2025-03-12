<script lang="ts">
  import { toggleWipPopup } from '$lib/stores/wipStore';
</script>

<button 
  class="wip-button" 
  on:click={toggleWipPopup}
  aria-label="Show work in progress updates"
>
  
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
    <path d="M17.64 15 22 10.64" />
    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
  </svg>
</button>

<style>
  .wip-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color, #6366f1);
    color: white;
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.2s ease, background-color 0.2s ease;
  }
  

  @media (prefers-color-scheme: dark) {
    .wip-button {
      background-color: var(--wip-color, #ffffff8d);
      color: rgb(122, 120, 120);
    }
  }


  

  .wip-button:hover {
    transform: scale(1.05);
    background-color: var(--primary-hover, #4f46e5);
    color: rgb(255, 255, 255);
  }

  .wip-button:active {
    transform: scale(0.95);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(251, 251, 255, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
    }
  }

  .wip-button {
    animation: pulse 2s infinite;
  }

  @media (max-width: 768px) {
    .wip-button {
      width: 45px;
      height: 45px;
      bottom: 15px;
      right: 15px;
    }
  }
</style> 