<script lang="ts">
  import { onMount } from 'svelte';
  import type { ColorShade } from '$lib/types/colorShade';
  import { addToast } from '$lib/stores/toast';
  
  let { shade, size = 'medium' } = $props<{
    shade: ColorShade;
    size?: 'small' | 'medium' | 'large';
  }>();
  
  let textColor = $state('');
  let hexValue = $state('');
  let rgbValue = $state('');
  
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
    hexValue = shade.value.toUpperCase();
    rgbValue = `RGB(${r}, ${g}, ${b})`;
  });
  
  function copyToClipboard(value: string, type: string) {
    navigator.clipboard.writeText(value)
      .then(() => {
        addToast(`Copied ${type} value: ${value} to clipboard!`, 'success');
      })
      .catch(() => {
        addToast('Failed to copy to clipboard', 'error');
      });
  }
</script>

<div class="color-card {size}" style="background-color: {shade.value}; color: {textColor}">
  <div class="card-content">
    <div class="color-name">{shade.name}</div>
    <div class="copy-options">
      <div class="copy-option">
        <span class="label">Hex</span>
        <button class="copy-button" on:click={() => copyToClipboard(hexValue, 'HEX')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
      <div class="copy-option">
        <span class="label">RGB</span>
        <button class="copy-button" on:click={() => copyToClipboard(rgbValue, 'RGB')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .color-card {
    margin-bottom: 0;
    border-radius: 0;
    position: relative;
    transition: transform 0.2s ease;
    user-select: none;
    display: flex;
    flex-direction: column;
  }
  
  .card-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;
    height: 100%;
  }
  
  .color-name {
    font-weight: 400;
    font-size: 0.75rem;
  }
  
  .copy-options {
    display: flex;
    gap: 0.5rem;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  .color-card:hover .copy-options {
    opacity: 1;
  }
  
  .copy-option {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .label {
    font-size: 0.7rem;
  }
  
  .copy-button {
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  .copy-option:hover .copy-button {
    opacity: 0.8;
  }
  
  .copy-button:hover {
    opacity: 1 !important;
  }
  
  /* Size variants */
  .small {
    height: 40px;
  }
  
  .medium {
    height: 100px;
  }
  
  .large {
    height: 150px;
  }
  
  @media (max-width: 768px) {
    .small {
      height: 40px;
    }
    
    .medium {
      height: 100px;
    }
  }
</style> 