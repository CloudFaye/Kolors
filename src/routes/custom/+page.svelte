<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { addToast } from '$lib/stores/toast';
  
  // Base color for customization
  const baseColor = writable('#4c6ef5'); // Default primary color
  
  // Define types for our color system
  type ColorItem = {
    name: string;
    description: string;
    value: string;
    hsl: string;
  };
  
  // Scale steps (brightness levels)
  const scaleSteps = [
    { name: '1', lightness: 0.98, description: 'Subtle background' },
    { name: '2', lightness: 0.96, description: 'UI element background' },
    { name: '3', lightness: 0.94, description: 'Hovered UI element background' },
    { name: '4', lightness: 0.92, description: 'Active/Selected UI element background' },
    { name: '5', lightness: 0.9, description: 'Subtle borders and separators' },
    { name: '6', lightness: 0.8, description: 'UI element border and focus rings' },
    { name: '7', lightness: 0.7, description: 'Hovered UI element border' },
    { name: '8', lightness: 0.6, description: 'Solid backgrounds' },
    { name: '9', lightness: 0.5, description: 'Hovered solid backgrounds' },
    { name: '10', lightness: 0.4, description: 'Low-contrast text' },
    { name: '11', lightness: 0.3, description: 'High-contrast text' },
    { name: '12', lightness: 0.15, description: 'Primary colors' }
  ];
  
  // Calculate colors in HSL and hex
  let colorScale = $state<ColorItem[]>([]);
  let isDarkMode = $state(false);
  
  // Sample components to show color in action
  let activeTab = $state('buttons');
  
  function hexToHSL(hex: string) {
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    
    return { h: h * 360, s: s * 100, l: l * 100 };
  }
  
  function HSLToHex(h: number, s: number, l: number) {
    s /= 100;
    l /= 100;
    
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    
    const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
    const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
    const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');
    
    return `#${rHex}${gHex}${bHex}`;
  }
  
  function updateColorScale() {
    const hsl = hexToHSL($baseColor);
    
    colorScale = scaleSteps.map(step => {
      let adjustedLightness = step.lightness * 100;
      
      // Invert lightness for dark mode
      if (isDarkMode) {
        adjustedLightness = 100 - adjustedLightness;
      }
      
      const hex = HSLToHex(hsl.h, hsl.s, adjustedLightness);
      return {
        name: step.name,
        description: step.description,
        value: hex,
        hsl: `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(adjustedLightness)}%)`
      };
    });
  }
  
  function copyColorCode(color: ColorItem, format: 'hex' | 'hsl') {
    const codeToCopy = format === 'hex' ? color.value : color.hsl;
    navigator.clipboard.writeText(codeToCopy)
      .then(() => {
        addToast(`Copied ${codeToCopy} to clipboard!`, 'success');
      })
      .catch(() => {
        addToast('Failed to copy to clipboard', 'error');
      });
  }
  
  function getContrastColor(hexColor: string) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    
    const luminance = 0.2126 * r/255 + 0.7152 * g/255 + 0.0722 * b/255;
    
    return luminance > 0.5 ? '#000000' : '#ffffff';
  }
  
  // Update colors when base color or theme changes
  $effect(() => {
    if ($baseColor || isDarkMode !== undefined) {
      updateColorScale();
    }
  });
  
  onMount(() => {
    // Check if dark mode is enabled
    isDarkMode = document.documentElement.classList.contains('dark');
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          isDarkMode = document.documentElement.classList.contains('dark');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    updateColorScale();
    
    return () => {
      observer.disconnect();
    };
  });
</script>

<div class="page-container">
  <section class="hero">
    <h1>Custom Color System</h1>
    <p class="lead">Create your own color system with perfect scaling for light and dark modes.</p>
  </section>
  
  <div class="layout">
    <aside class="color-controls">
      <div class="controls-container">
        <div class="control-group">
          <label for="baseColor">Base Color</label>
          <div class="color-input-wrapper">
            <input 
              type="color" 
              id="baseColor" 
              bind:value={$baseColor} 
              class="color-picker"
            />
            <input 
              type="text" 
              bind:value={$baseColor} 
              class="color-text-input"
            />
          </div>
        </div>
        
        <div class="scale-preview">
          {#each colorScale as color}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div 
              class="color-preview-item" 
              style="background-color: {color.value}; color: {getContrastColor(color.value)}"
              onclick={() => copyColorCode(color, 'hex')}
            >
              <span>{color.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </aside>
    
    <main class="components-preview">
      <div class="tabs">
        <button 
          class={activeTab === 'buttons' ? 'active' : ''} 
          onclick={() => activeTab = 'buttons'}
        >
          Buttons
        </button>
        <button 
          class={activeTab === 'cards' ? 'active' : ''} 
          onclick={() => activeTab = 'cards'}
        >
          Cards
        </button>
        <button 
          class={activeTab === 'inputs' ? 'active' : ''} 
          onclick={() => activeTab = 'inputs'}
        >
          Form Elements
        </button>
      </div>
      
      <div class="preview-content">
        {#if activeTab === 'buttons'}
          <div class="component-group">
            <h3>Buttons</h3>
            <div class="component-row">
              <button class="demo-button primary" style="--button-bg: {colorScale[8]?.value}">
                Primary Button
              </button>
              <button class="demo-button secondary" style="--button-border: {colorScale[10]?.value}; --button-hover: {colorScale[3]?.value}">
                Secondary Button
              </button>
              <button class="demo-button subtle" style="--button-hover: {colorScale[1]?.value}; --button-text: {colorScale[10]?.value}">
                Text Button
              </button>
            </div>
          </div>
        {/if}
        
        {#if activeTab === 'cards'}
          <div class="component-group">
            <h3>Cards</h3>
            <div class="cards-container">
              <div class="demo-card" style="--card-bg: {colorScale[1]?.value}; --card-border: {colorScale[5]?.value}">
                <h3 style="color: {colorScale[14]?.value}">Card Title</h3>
                <p style="color: {colorScale[13]?.value}">Card content with custom colors applied based on your selected color scheme.</p>
                <button class="demo-button small" style="--button-bg: {colorScale[6]?.value}">
                  Button
                </button>
              </div>
              
              <div class="demo-card elevated" style="--card-bg: {colorScale[2]?.value}; --card-shadow: {colorScale[6]?.value}">
                <h3 style="color: {colorScale[11]?.value}">Elevated Card</h3>
                <p style="color: {colorScale[10]?.value}">Card with elevation using custom shadow colors.</p>
                <button class="demo-button small primary" style="--button-bg: {colorScale[8]?.value}">
                  Buttonnb
                </button>
              </div>
            </div>
          </div>
        {/if}
        
        {#if activeTab === 'inputs'}
          <div class="component-group">
            <h3>Form Elements</h3>
            <div class="form-elements">
              <div class="input-group">
                <label for="demo-input" style="color: {colorScale[11]?.value}">Text Input</label>
                <input 
                  type="text" 
                  id="demo-input" 
                  placeholder="Type something..." 
                  class="demo-input" 
                  style="--input-border: {colorScale[11]?.value}; --background-color:transparent; --input-focus: {colorScale[10]?.value}"
                />
              </div>
              
              <div class="input-group">
                <label style="color: {colorScale[11]?.value}">Checkbox</label>
                <div class="checkbox-wrapper">
                  <input 
                    type="checkbox" 
                    id="demo-checkbox" 
                    class="demo-checkbox" 
                    style="--checkbox-color: {colorScale[8]?.value}"
                  />
                  <label for="demo-checkbox" style="color: {colorScale[10]?.value}">Check me</label>
                </div>
              </div>
              
              <div class="input-group">
                <label style="color: {colorScale[11]?.value}">Radio Buttons</label>
                <div class="radio-wrapper">
                  <input 
                    type="radio" 
                    id="radio1" 
                    name="demo-radio" 
                    class="demo-radio" 
                    checked
                    style="--radio-color: {colorScale[8]?.value}"
                  />
                  <label for="radio1" style="color: {colorScale[10]?.value}">Option 1</label>
                </div>
                <div class="radio-wrapper">
                  <input 
                    type="radio" 
                    id="radio2" 
                    name="demo-radio" 
                    class="demo-radio" 
                    style="--radio-color: {colorScale[8]?.value}"
                  />
                  <label for="radio2" style="color: {colorScale[10]?.value}">Option 2</label>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </main>
  </div>
  
  <section class="color-scale-table">
    <h2>Color Scale Reference</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Preview</th>
            <th>Hex</th>
            <th>HSL</th>
            <th>Usage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each colorScale as color}
            <tr>
              <td class="step-name">{color.name}</td>
              <td>
                <div 
                  class="color-swatch" 
                  style="background-color: {color.value};"
                ></div>
              </td>
              <td class="color-code">{color.value}</td>
              <td class="color-code">{color.hsl}</td>
              <td>{color.description}</td>
              <td class="actions">
                <button 
                  class="copy-button" 
                  onclick={() => copyColorCode(color, 'hex')}
                  aria-label="Copy hex code"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
                <button 
                  class="copy-button" 
                  onclick={() => copyColorCode(color, 'hsl')}
                  aria-label="Copy HSL code"
                >
                  HSL
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>
</div>

<style>
  .page-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .lead {
    font-size: 1.2rem;
    color: var(--text-muted);
    max-width: 760px;
    margin: 0 auto 2rem;
  }
  
  .layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  /* Color Controls Panel */
  .color-controls {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }
  
  .controls-container {
    background: var(--surface-color);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    padding: 1.5rem;
  }
  
  .control-group {
    margin-bottom: 1.5rem;
  }
  
  .control-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 0.95rem;
  }
  
  .color-input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .color-picker {
    height: 40px;
    width: 140px;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
  }
  
  .color-text-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-family: var(--font-mono);
  }
  
  .scale-preview {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }
  
  .color-preview-item {
    height: 32px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 0.85rem;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .color-preview-item:hover {
    transform: translateX(5px);
  }
  
  /* Components Preview */
  .components-preview {
    background: var(--surface-color);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    overflow: hidden;
  }
  
  .tabs {
    display: flex;
    border-bottom: 1px solid var(--border-color);
  }
  
  .tabs button {
    padding: 1rem 1.5rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.2s ease;
    color: var(--text-muted);
  }
  
  .tabs button.active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
  
  .preview-content {
    padding: 2rem;
  }
  
  .component-group {
    margin-bottom: 2rem;
  }
  
  .component-group h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .component-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  /* Demo Components */
  .demo-button {
    padding: 0.75rem 1.25rem;
    border-radius: 6px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .demo-button.small {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    background-color: var(--button-bg, var(--primary-color));
    border: 0px;
  }
  
  .demo-button.primary {
    background-color: var(--button-bg, var(--primary-color));
    border: none;
    color: white;
  }
  
  .demo-button.primary:hover {
    opacity: 0.9;
  }
  
  .demo-button.secondary {
    background-color: transparent;
    border: 1px solid var(--button-border, var(--border-color));
    color: var(--text-color);
  }
  
  .demo-button.secondary:hover {
    background-color: var(--button-hover, var(--surface-color));
  }
  
  .demo-button.subtle {
    background-color: transparent;
    border: none;
    color: var(--button-text, var(--text-color));
  }
  
  .demo-button.subtle:hover {
    background-color: var(--button-hover, var(--surface-color));
  }
  
  /* Card demos */
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .demo-card {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: var(--card-bg, var(--surface-color));
    border: 1px solid var(--card-border, var(--border-color));
  }
  
  .demo-card.elevated {
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px var(--card-shadow, var(--border-color));
  }
  
  .demo-card h3 {
    margin-bottom: 0.75rem;
  }
  
  .demo-card p {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  /* Form demos */
  .form-elements {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 500px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .demo-input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid var(--input-border, var(--border-color));
    background-color: var(--background-color);
    font-family: var(--font-sans);
    transition: all 0.2s ease;
  }
  
  .demo-input:focus {
    outline: none;
    border-color: var(--input-focus, var(--primary-color));
    box-shadow: 0 0 0 2px rgba(var(--input-focus, var(--primary-color)), 0.2);
  }
  
  .checkbox-wrapper, .radio-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .demo-checkbox, .demo-radio {
    accent-color: var(--checkbox-color, var(--primary-color));
    width: 18px;
    height: 18px;
  }
  
  /* Color Scale Table */
  .color-scale-table {
    margin-top: 3rem;
  }
  
  .color-scale-table h2 {
    margin-bottom: 1.5rem;
  }
  
  .table-container {
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  
  th {
    font-weight: 600;
    color: var(--text-muted);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .step-name {
    font-weight: 600;
  }
  
  .color-swatch {
    width: 40px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }
  
  .color-code {
    font-family: var(--font-mono);
    font-size: 0.85rem;
  }
  
  .actions {
    display: flex;
    gap: 0.5rem;
  }
  
  .copy-button {
    padding: 0.35rem 0.5rem;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.75rem;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s ease;
    color: var(--text-color);
  }
  
  .copy-button:hover {
    background-color: var(--surface-color);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .layout {
      grid-template-columns: 1fr;
    }
    
    .color-controls {
      position: static;
      margin-bottom: 1.5rem;
    }
    
    .cards-container {
      grid-template-columns: 1fr;
    }
  }
</style> 