<script lang="ts">
  import { onMount } from 'svelte';
  import type { ColorShade } from '$lib/data/colorSystems';
  import { addToast } from '$lib/stores/toast';
  
  let { shade, size = 'medium' } = $props<{
    shade: ColorShade;
    size?: 'small' | 'medium' | 'large';
  }>();
  
  let textColor = $state('');
  let colorInfo = $state('');
  
  onMount(() => {
    // Calculate contrast color for text (simple version)
    const hex = shade.value.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    
    // Calculate relative luminance using WCAG formula
    const luminance = 0.2126 * r/255 + 0.7152 * g/255 + 0.0722 * b/255;
    
    textColor = luminance > 0.5 ? '#000000' : '#ffffff';
    
    // Get color info
    colorInfo = shade.value.toUpperCase();
  });
  
  function copyToClipboard() {
    navigator.clipboard.writeText(shade.value)
      .then(() => {
        addToast(`Copied ${shade.value.toUpperCase()} to clipboard!`, 'success');
      })
      .catch(() => {
        addToast('Failed to copy to clipboard', 'error');
      });
  }
</script>

<div class="color-card {size}" style="background-color: {shade.value}; color: {textColor}">
  <div class="card-content">
    <div class="color-info">
      <span class="color-name">{shade.name}</span>
      <span class="color-value">{colorInfo}</span>
    </div>
    <button class="copy-button" onclick={copyToClipboard} aria-label="Copy color code">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  </div>
</div>

<style>
  .color-card {
    margin-bottom: 8px;
    border-radius: 6px;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    user-select: none;
  }
  
  .color-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 0.8rem;
    height: 100%;
    
  }
  
  .color-info {
    display: flex;
    flex-direction: column;
  }
  
  .color-name {
    font-weight: 400;
    font-size: 0.75rem;
    transition: font-size 0.2s ease;
    
  }
  
  .color-value {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.2s ease, max-height 0.2s ease;
  }
  
  .copy-button {
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    opacity: 0;
    padding: 0.25rem;
    border-radius: 4px;
    transition: opacity 0.2s ease;
    transform: scale(0.8);
  }
  
  .color-card:hover .color-value {
    opacity: 0.8;
    max-height: 20px;
  }
  
  .color-card:hover .copy-button {
    opacity: 0.7;
    transform: scale(1);
  }
  
  .copy-button:hover {
    opacity: 1 !important;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  /* Size variants */
  .small {
    height: 60px;
  }
  
  .medium {
    height: 80px;
  }
  
  .large {
    height: 100px;
  }
</style> 