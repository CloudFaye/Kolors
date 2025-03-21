<script lang="ts">
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { addToast } from '$lib/stores/toast';
  import { colorSystems } from '$lib/data/colorSystems';
  import ColorSelect, { type RGB } from 'svelte-color-select'
	import { fade, fly, slide } from 'svelte/transition';
  
  
  const baseColor = writable('#e5484d'); // Default primary accent color // red
  const secondaryColor = writable('#78716c'); // Default secondary accent color //stone
  
  
  const accentColors = [
    { name: "blue", value: "#4c6ef5", description: "Primary accent" },
    { name: "purple", value: "#8e4ec6", description: "Creative accent" },
    { name: "green", value: "#30a46c", description: "Success accent" },
    { name: "red", value: "#e5484d", description: "Error/alert accent" },
    { name: "amber", value: "#ffb224", description: "Warning accent" },
    { name: "pink", value: "#f670c7", description: "Highlight accent" },
     { name: "teal", value: "#006b7e", description: "Teal accent"},
     { name: "magenta", value: "#6b264b", description: "Magenta accent"},
     { name: "lapis-blue", value: "#004b8d", description: "Lapis Blue accent"},
     { name: "white", value: "#ffffff", description: "White"},
  ];
  
  const baseColors = [
    { name: "slate", value: "#64748b", description: "Cool neutral" },
    { name: "gray", value: "#6e6e6e", description: "Balanced neutral" },
    { name: "zinc", value: "#71717a", description: "Modern neutral" },
    { name: "stone", value: "#78716c", description: "Warm neutral" },
    { name: "cool", value: "#425466", description: "Deep neutral" },
    { name: "sand", value: "#d2b48c", description: "Sandy neutral" },
    { name: "clay", value: "#9a8478", description: "Clay neutral" },
    { name: "sage", value: "#8a9a80", description: "Sage neutral" },
    { name: "olive-gray", value: "#a6997a", description: "Olive neutral" },
    { name: "prune", value: "#603749", description: "Prune neutral" }
  ];
  
  // RGB versions of the colors for the color picker
  let primaryRgb = $state<RGB>(hexToRgb('#e5484d'));
  let secondaryRgb = $state<RGB>(hexToRgb('#78716c'));
  
  // Color picker visibility state
  let showPrimaryPicker = $state(false);
  let showSecondaryPicker = $state(false);
  
  // Store button positions for the popup
  let primaryButtonPosition = $state<DOMRect | null>(null);
  let secondaryButtonPosition = $state<DOMRect | null>(null);
  
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
  let secondaryColorScale = $state<ColorItem[]>([]);
  let isDarkMode = $state(false);
  
  // Sample components to show color in action
  let activeTab = $state('buttons');
  
  // Toggle state for demo
  let isToggled = $state(false);
  
  // CSS Export Panel State
  let showCssExport = $state(false);
  let exportFormat = $state<'css' | 'scss'>('css');
  let cssCode = $state('');
  
  // Color system preset state
  let showPresets = $state(false);
  let selectedSystem = $state<string | null>(null);
  
  // Keep track of selected color swatch
  let selectedAccentColor = $state('red');
  let selectedBaseColor = $state('stone');
  
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
  
  function generateColorScale(baseHexColor: string, isDarkMode: boolean) {
    const hsl = hexToHSL(baseHexColor);
    
    // Special handling for white accent color
    const isWhiteAccent = baseHexColor.toLowerCase() === '#ffffff';
    
    return scaleSteps.map(step => {
      let adjustedLightness = step.lightness * 100;
      
      // Invert lightness for dark mode
      if (isDarkMode) {
        adjustedLightness = 100 - adjustedLightness;
      }
      
      // For white accent, adjust the scale to provide better contrast
      if (isWhiteAccent && !isDarkMode) {
        const stepNum = parseInt(step.name);
        if (stepNum <= 7) {
          // Steps 1-7: Keep very light but with slight gradations
          // This creates a subtle gradient from pure white to very light gray
          adjustedLightness = 100 - ((stepNum - 1) * 1.5); // 100%, 98.5%, 97%, etc.
        } else {
          // For steps 8-12, gradually shift from light gray to dark gray for better contrast
          const darknessFactor = (stepNum - 7) / 5; // 0.2, 0.4, 0.6, 0.8, 1.0
          adjustedLightness = 90 - (darknessFactor * 30); // 90%, 84%, 78%, 72%, 66%
        }
      }
      
      // For white accent in dark mode, improve contrast with better gradation
      if (isWhiteAccent && isDarkMode) {
        const stepNum = parseInt(step.name);
        if (stepNum >= 6) {
          // Create a better gradient for darker steps
          adjustedLightness = 10 - (stepNum - 6) * 1.5; // 10%, 8.5%, 7%, etc.
        } else {
          // For steps 1-5, gradually shift from dark gray to medium gray
          const lightnessFactor = stepNum / 5; // 0.2, 0.4, 0.6, 0.8, 1.0
          adjustedLightness = lightnessFactor * 25; // 5%, 10%, 15%, 20%, 25%
        }
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
  
  function updateColorScales() {
    colorScale = generateColorScale($baseColor, isDarkMode);
    secondaryColorScale = generateColorScale($secondaryColor, isDarkMode);
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
    // Handle undefined or null values
    if (!hexColor) {
      return '#000000'; // Default to black text
    }
    
    // Special case for white - always use dark text
    if (hexColor.toLowerCase() === '#ffffff') {
      return '#000000';
    }
    
    // Special case for black - always use white text
    if (hexColor.toLowerCase() === '#000000') {
      return '#ffffff';
    }
    
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    
    // Handle invalid hex values that might result in NaN
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return '#000000';
    }
    
    const luminance = 0.2126 * r/255 + 0.7152 * g/255 + 0.0722 * b/255;
    
    return luminance > 0.5 ? '#000000' : '#ffffff';
  }
  
  // Helper function to get proper button styles for white accent/base
  function getButtonStyles(isWhite: boolean, isPrimary: boolean) {
    if (isWhite && isPrimary) {
      return {
        bg: '#ffffff',
        text: '#000000',
        hover: '#f5f5f5',
        border: '1px solid #e2e2e2'
      };
    } else if (isWhite) {
      return {
        bg: 'transparent',
        text: '#333333',
        hover: '#f5f5f5',
        border: '1px solid #e2e2e2'
      };
    }
    return {};
  }
  
  // Update colors when base color or theme changes
  $effect(() => {
    if ($baseColor || $secondaryColor || isDarkMode !== undefined) {
      updateColorScales();
      
      // Only update CSS if export panel is shown, but not in reaction to format change
      if (showCssExport) {
        updateCssCode();
      }
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
    
    // Add click outside listener
    document.addEventListener('click', handleClickOutside);
    
    updateColorScales();
    
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleClickOutside);
    };
  });

  // Generate exportable CSS code
  function updateCssCode() {
    const prefix = exportFormat === 'scss' ? '$' : '--';
    const separator = exportFormat === 'scss' ? ': ' : ': ';
    const terminator = exportFormat === 'scss' ? ';' : ';';
    
    let code = exportFormat === 'scss' ? '// SCSS Variables\n' : ':root {\n';
    
    // Accent color scale (primary interactive elements)
    code += '\n  /* Accent Color Scale */\n';
    colorScale.forEach(color => {
      code += `  ${prefix}accent-${color.name}${separator}${color.value}${terminator}\n`;
    });
    
    // Base color scale (backgrounds, structure)
    code += '\n  /* Base Color Scale */\n';
    secondaryColorScale.forEach(color => {
      code += `  ${prefix}base-${color.name}${separator}${color.value}${terminator}\n`;
    });
    
    // Semantic color variables
    code += '\n  /* Semantic Colors */\n';
    code += `  ${prefix}background${separator}${secondaryColorScale[1]?.value}${terminator}\n`;
    code += `  ${prefix}surface${separator}${secondaryColorScale[2]?.value}${terminator}\n`;
    code += `  ${prefix}border${separator}${secondaryColorScale[5]?.value}${terminator}\n`;
    code += `  ${prefix}overlay${separator}${secondaryColorScale[3]?.value}${terminator}\n`;
    code += `  ${prefix}text${separator}${secondaryColorScale[11]?.value}${terminator}\n`;
    code += `  ${prefix}text-muted${separator}${secondaryColorScale[10]?.value}${terminator}\n`;
    
    code += '\n  /* Interactive Elements */\n';
    code += `  ${prefix}accent-primary${separator}${colorScale[8]?.value}${terminator}\n`;
    code += `  ${prefix}accent-hover${separator}${colorScale[7]?.value}${terminator}\n`;
    code += `  ${prefix}accent-subtle${separator}${colorScale[3]?.value}${terminator}\n`;
    code += `  ${prefix}accent-text${separator}${colorScale[11]?.value}${terminator}\n`;
    
    if (exportFormat === 'scss') {
      code += '\n// Usage example: background-color: $background;';
      code += '\n// Interactive example: color: $accent-primary;';
    } else {
      code += '}\n\n/* Usage example: background-color: var(--background); */';
      code += '\n/* Interactive example: color: var(--accent-primary); */';
    }
    
    cssCode = code;
  }

  // Copy CSS code to clipboard
  function copyCssCode() {
    navigator.clipboard.writeText(cssCode)
      .then(() => {
        addToast('CSS code copied to clipboard!', 'success');
      })
      .catch(() => {
        addToast('Failed to copy CSS code', 'error');
      });
  }
  
  // Download CSS/SCSS as a file
  function downloadCssCode() {
    const fileExtension = exportFormat === 'scss' ? 'scss' : 'css';
    const fileName = `custom-color-system.${fileExtension}`;
    
    const blob = new Blob([cssCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }, 100);
    
    addToast(`${exportFormat.toUpperCase()} file downloaded!`, 'success');
  }

  // Toggle CSS export panel
  function toggleCssExportPanel() {
    showCssExport = !showCssExport;
    if (showCssExport) {
      updateCssCode();
    }
  }
  
  // Handle format change separately to avoid infinite loop
  function handleFormatChange(format: 'css' | 'scss') {
    exportFormat = format;
    // Only update when needed, not in a reactive context
    updateCssCode();
  }

  // Color picker related functions
  function hexToRgb(hex: string): RGB {
    try {
      // Handle invalid inputs gracefully
      if (!hex || typeof hex !== 'string') {
        return { r: 0, g: 0, b: 0 };
      }
      
      // Remove # if present
      hex = hex.replace('#', '');
      
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      
      // Make sure we have a valid hex value
      if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
        return { r: 0, g: 0, b: 0 };
      }
      
      // Parse hex values
      const r = parseInt(hex.substring(0, 2), 16) / 255;
      const g = parseInt(hex.substring(2, 4), 16) / 255;
      const b = parseInt(hex.substring(4, 6), 16) / 255;
      
      // Check for NaN values and return defaults if necessary
      if (isNaN(r) || isNaN(g) || isNaN(b)) {
        return { r: 0, g: 0, b: 0 };
      }
      
      return { r, g, b };
    } catch (e) {
      console.error('Error parsing hex color:', e);
      return { r: 0, g: 0, b: 0 };
    }
  }
  
  function rgbToHex(rgb: RGB): string {
    // Convert 0-1 values to 0-255 and then to hex
    const r = Math.round(rgb.r * 255).toString(16).padStart(2, '0');
    const g = Math.round(rgb.g * 255).toString(16).padStart(2, '0');
    const b = Math.round(rgb.b * 255).toString(16).padStart(2, '0');
    
    return `#${r}${g}${b}`;
  }
  
  // Update the hex color when RGB changes (for primary color)
  $effect(() => {
    primaryRgb = hexToRgb($baseColor);
  });
  
  // Update the hex color when RGB changes (for secondary color)
  $effect(() => {
    secondaryRgb = hexToRgb($secondaryColor);
  });
  
  // Add reactivity for direct RGB updates
  $effect(() => {
    // When RGB changes, update the corresponding hex color
    const hex = rgbToHex(primaryRgb);
    $baseColor = hex;
  });

  $effect(() => {
    // When RGB changes, update the corresponding hex color
    const hex = rgbToHex(secondaryRgb);
    $secondaryColor = hex;
  });
  
  // Toggle color picker visibility and store button position
  function togglePrimaryPicker(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    primaryButtonPosition = button.getBoundingClientRect();
    showPrimaryPicker = !showPrimaryPicker;
    if (showPrimaryPicker) {
      showSecondaryPicker = false; // Close other picker if open
    }
  }
  
  function toggleSecondaryPicker(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    secondaryButtonPosition = button.getBoundingClientRect();
    showSecondaryPicker = !showSecondaryPicker;
    if (showSecondaryPicker) {
      showPrimaryPicker = false; // Close other picker if open
    }
  }
  
  // Close pickers when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // More specific check to prevent closing when interacting with the color picker
    const isClickInPicker = target.closest('.color-picker-container') || 
                           target.closest('.custom-color-picker') || 
                           target.closest('input[type="range"]');
    const isClickOnButton = target.closest('.color-preview-button');
    
    if (!isClickInPicker && !isClickOnButton) {
      showPrimaryPicker = false;
      showSecondaryPicker = false;
    }
  }

  // Remove all presets related functions

  updateCssCode();

  // Replace the bidirectional effect hooks with a new approach
  // Create temporary state variables for input handling
  let tempBaseColorInput = $state($baseColor);
  let tempSecondaryColorInput = $state($secondaryColor);

  // Handle hex input changes
  function handleBaseColorInput(event: Event) {
    const input = event.target as HTMLInputElement;
    tempBaseColorInput = input.value;
    
    // Make sure the input starts with #
    if (tempBaseColorInput && !tempBaseColorInput.startsWith('#')) {
      tempBaseColorInput = '#' + tempBaseColorInput;
    }
    
    // Only update the actual base color when the input is a valid hex color
    if (/^#[0-9A-Fa-f]{6}$/.test(tempBaseColorInput)) {
      $baseColor = tempBaseColorInput;
      primaryRgb = hexToRgb(tempBaseColorInput);
    }
  }

  function handleSecondaryColorInput(event: Event) {
    const input = event.target as HTMLInputElement;
    tempSecondaryColorInput = input.value;
    
    // Make sure the input starts with #
    if (tempSecondaryColorInput && !tempSecondaryColorInput.startsWith('#')) {
      tempSecondaryColorInput = '#' + tempSecondaryColorInput;
    }
    
    // Only update the actual accent color when the input is a valid hex color
    if (/^#[0-9A-Fa-f]{6}$/.test(tempSecondaryColorInput)) {
      $secondaryColor = tempSecondaryColorInput;
      secondaryRgb = hexToRgb(tempSecondaryColorInput);
    }
  }

  // Keep the temp inputs in sync when colors change from other sources (like the color picker)
  $effect(() => {
    tempBaseColorInput = $baseColor;
  });

  $effect(() => {
    tempSecondaryColorInput = $secondaryColor;
  });

  // Handle RGB changes from the color picker for primary color
  $effect(() => {
    const hex = rgbToHex(primaryRgb);
    if (hex !== $baseColor) {
      $baseColor = hex;
      tempBaseColorInput = hex;
    }
  });

  // Handle RGB changes from the color picker for secondary color
  $effect(() => {
    const hex = rgbToHex(secondaryRgb);
    if (hex !== $secondaryColor) {
      $secondaryColor = hex;
      tempSecondaryColorInput = hex;
    }
  });

  // Update the selectAccentColor and selectBaseColor functions
  function selectAccentColor(colorName: string, colorValue: string) {
    selectedAccentColor = colorName;
    $baseColor = colorValue;
    tempBaseColorInput = colorValue;
    primaryRgb = hexToRgb(colorValue);
  }

  function selectBaseColor(colorName: string, colorValue: string) {
    selectedBaseColor = colorName;
    $secondaryColor = colorValue;
    tempSecondaryColorInput = colorValue;
    secondaryRgb = hexToRgb(colorValue);
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="page-container animate-item" onclick={() => {}}>
  <section class="hero">
    <p class='text-4xl font-semibold'>Theme Builder</p>
    <p class="">Create your own color system with perfect scaling for light and dark modes.</p>
  </section>
  
  <div class="layout">
    <aside class="color-controls">
      <div class="controls-container">
        <div class="color-section">
          <h3>Accent Color</h3>
          <p class="color-description">Used for interactive elements, highlights, and CTAs</p>
          <div class="color-grid accent-grid">
            {#each accentColors as color}
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <button 
                class="color-swatch-btn {selectedAccentColor === color.name ? 'selected' : ''}" 
                style="background-color: {color.value};"
                onclick={() => selectAccentColor(color.name, color.value)}
                title={color.description}
              ></button>
            {/each}
          </div>
          
          <div class="color-input-wrapper mt-3">
            <button 
              class="color-preview-button" 
              style="background-color: {$baseColor};" 
              aria-label="Select custom accent color"
              onclick={togglePrimaryPicker}
            ></button>
            <input 
              type="text" 
              id="baseColor"
              bind:value={tempBaseColorInput} 
              class="color-text-input"
              oninput={handleBaseColorInput}
            />
          </div>
        </div>
        
        <div class="color-section">
          <h3>Base Color</h3>
          <p class="color-description">Used for backgrounds, overlays, and foundation</p>
          <div class="color-grid base-grid">
            {#each baseColors as color}
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_consider_explicit_label -->
              <button 
                class="color-swatch-btn {selectedBaseColor === color.name ? 'selected' : ''}" 
                style="background-color: {color.value};"
                onclick={() => selectBaseColor(color.name, color.value)}
                title={color.description}
              ></button>
            {/each}
          </div>
          
          <div class="color-input-wrapper mt-3">
            <button 
              class="color-preview-button" 
              style="background-color: {$secondaryColor};" 
              aria-label="Select custom base color"
              onclick={toggleSecondaryPicker}
            ></button>
            <input 
              type="text" 
              id="secondaryColor"
              bind:value={tempSecondaryColorInput} 
              class="color-text-input"
              oninput={handleSecondaryColorInput}
            />
          </div>
        </div>
        
        <div class="flex flex-row min-w-[100%] items-center justify-center gap-2 mt-4">
          <div class="scale-preview flex-1">
            <div class="scale-preview-header">Accent</div>
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
          
          <div class="scale-preview flex-1">
            <div class="scale-preview-header">Base</div>
            {#each secondaryColorScale as color}
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
        
        <!-- CSS Export Button -->
        <button 
          class="export-css-button" 
          onclick={() => toggleCssExportPanel()}
        >
          {showCssExport ? 'Hide CSS Export' : 'Export CSS'}
        </button>
      </div>
    </aside>
    
    <main style="background-color: {secondaryColorScale[1]?.value};" class="components-preview">
      <div class="preview-content">
        <div class="component-group">
         
          
          <div class="components-gridd">
            <!-- Group 1: Buttons -->
            <div class="component-container">
              <div class="component-row">
                <button class="demo-button primary" style="
                  --button-bg: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).bg : colorScale[8]?.value}; 
                  --button-text: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).text : getContrastColor(colorScale[8]?.value)}; 
                  --button-hover: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).hover : colorScale[7]?.value}; 
                  {$baseColor.toLowerCase() === '#ffffff' ? 'border: 1px solid #e2e2e2;' : ''}">
                  Primary
                </button>
                <button class="demo-button secondary" style="
                  --button-border: {$secondaryColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : secondaryColorScale[5]?.value}; 
                  --button-bg: {$secondaryColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : secondaryColorScale[2]?.value}; 
                  --button-hover: {$secondaryColor.toLowerCase() === '#ffffff' ? '#e8e8e8' : secondaryColorScale[3]?.value}; 
                  --button-text: {$secondaryColor.toLowerCase() === '#ffffff' ? '#333333' : secondaryColorScale[11]?.value}">
                  Secondary
                </button>
                <button class="demo-button subtle" style="
                  --button-hover: {$secondaryColor.toLowerCase() === '#ffffff' ? '#f5f5f5' : secondaryColorScale[2]?.value}; 
                  --button-text: {$secondaryColor.toLowerCase() === '#ffffff' ? '#333333' : secondaryColorScale[10]?.value}">
                  Text
                </button>
              </div>
              
              <div class="component-row">
                <button class="demo-button accent" style="
                  --button-bg: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, false).bg : colorScale[5]?.value}; 
                  --button-text: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, false).text : colorScale[11]?.value}; 
                  --button-border: {$baseColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : colorScale[8]?.value}; 
                  --button-hover: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, false).hover : colorScale[6]?.value}; 
                  {$baseColor.toLowerCase() === '#ffffff' ? 'border: 1px solid #e2e2e2;' : ''}">
                  Accent
                </button>
                <button class="demo-button accent-outline" style="
                  --button-border: {$baseColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : colorScale[8]?.value}; 
                  --button-hover: {$baseColor.toLowerCase() === '#ffffff' ? '#f5f5f5' : colorScale[2]?.value}; 
                  --button-text: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[9]?.value}">
                  Outline
                </button>
                <button class="demo-button accent-subtle" style="
                  --button-hover: {$baseColor.toLowerCase() === '#ffffff' ? '#f5f5f5' : colorScale[2]?.value}; 
                  --button-text: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[9]?.value}">
                  Subtle
                </button>
              </div>
            </div>
            
            <!-- Group 2: Badges -->
            <div class="component-container">
              <div class="component-row">
                <span class="demo-badge primary" style="
                  --badge-bg: {$baseColor.toLowerCase() === '#ffffff' ? '#ffffff' : colorScale[8]?.value}; 
                  --badge-text: {$baseColor.toLowerCase() === '#ffffff' ? '#000000' : getContrastColor(colorScale[8]?.value)}; 
                  {$baseColor.toLowerCase() === '#ffffff' ? 'border: 1px solid #e2e2e2;' : ''}">Primary</span>
                <span class="demo-badge secondary" style="
                  --badge-bg: {$secondaryColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : secondaryColorScale[4]?.value}; 
                  --badge-text: {$secondaryColor.toLowerCase() === '#ffffff' ? '' : secondaryColorScale[11]?.value};">Secondary</span>
                <span class="demo-badge outline" style="
                  --badge-border: {$baseColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : colorScale[8]?.value}; 
                  --badge-text: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[9]?.value};">Outline</span>
                <span class="demo-badge subtle" style="
                  --badge-bg: {$baseColor.toLowerCase() === '#ffffff' ? '#f5f5f5' : colorScale[3]?.value}; 
                  --badge-text: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[10]?.value}; 
                  {$baseColor.toLowerCase() === '#ffffff' ? 'border: 1px solid #e2e2e2;' : ''}">Subtle</span>
                <span class="demo-badge pill" style="
                  --badge-bg: {$baseColor.toLowerCase() === '#ffffff' ? '#ffffff' : colorScale[5]?.value}; 
                  --badge-text: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[11]?.value}; 
                  {$baseColor.toLowerCase() === '#ffffff' ? 'border: 1px solid #e2e2e2;' : ''}">Pill</span>
                <span class="demo-badge with-dot" style="
                  --badge-bg: {$secondaryColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : secondaryColorScale[3]?.value}; 
                  --badge-text: {$secondaryColor.toLowerCase() === '#ffffff' ? '#333333' : secondaryColorScale[11]?.value}; 
                  --dot-color: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[8]?.value};">
                  <span class="badge-dot"></span>Status
                </span>
              </div>
            </div>
            
            <!-- Group 3: Form Elements -->
            <div class="component-container">
              <div class="input-row">
                <div class="input-group flex-1">
                  <input 
                    type="text" 
                    id="demo-input" 
                    placeholder="Regular input..." 
                    class="demo-input" 
                    style="--input-border: {secondaryColorScale[5]?.value}; --input-bg: {secondaryColorScale[1]?.value}; --input-focus: {colorScale[8]?.value}"
                  />
                </div>
                
                <div class="input-group flex-1">
                  <input 
                    type="text" 
                    id="demo-input-accent" 
                    placeholder="Accent input..." 
                    class="demo-input accent" 
                    style="--input-border: {secondaryColorScale[5]?.value}; --input-bg: {colorScale[3]?.value}; --input-focus: {colorScale[8]?.value}"
                  />
                </div>
              </div>
              
              <div class="slider-container mt-4" style="--slider-track: {secondaryColorScale[5]?.value}; --slider-fill: {$baseColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : colorScale[8]?.value}; --slider-thumb: {$baseColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : colorScale[8]?.value};">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value="50" 
                  class="demo-slider"
                />
                <div class="slider-value">50</div>
              </div>
            </div>

            <!-- Group 4: Checkboxes and Radio -->
            <div class="component-container">
              <div class="controls-flex-row">
                <div class="controls-group">
                  <div class="checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      id="demo-checkbox" 
                      class="demo-checkbox" 
                      checked
                      style="--checkbox-color: {colorScale[8]?.value}"
                    />
                    <label for="demo-checkbox" style="color: {secondaryColorScale[10]?.value}">Option 1</label>
                  </div>
                  <div class="checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      id="demo-checkbox-accent" 
                      class="demo-checkbox" 
                      style="--checkbox-color: {colorScale[8]?.value}"
                    />
                    <label for="demo-checkbox-accent" style="color: {secondaryColorScale[10]?.value}">Option 2</label>
                  </div>
                </div>
                
                <div class="controls-group">
                  <div class="radio-wrapper">
                    <input 
                      type="radio" 
                      id="radio1" 
                      name="demo-radio" 
                      class="demo-radio" 
                      checked
                      style="--radio-color: {colorScale[8]?.value}"
                    />
                    <label for="radio1" style="color: {secondaryColorScale[10]?.value}">Selection 1</label>
                  </div>
                  <div class="radio-wrapper">
                    <input 
                      type="radio" 
                      id="radio2" 
                      name="demo-radio" 
                      class="demo-radio" 
                      style="--radio-color: {colorScale[8]?.value}"
                    />
                    <label for="radio2" style="color: {secondaryColorScale[10]?.value}">Selection 2</label>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Group 5: Tooltips -->
            <div class="component-container">
              <div class="component-row center-items">
                <div class="tooltip-container">
                  <button class="demo-button secondary" style="
                    --button-border: {$secondaryColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : secondaryColorScale[5]?.value}; 
                    --button-bg: {$secondaryColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : secondaryColorScale[2]?.value}; 
                    --button-hover: {$secondaryColor.toLowerCase() === '#ffffff' ? '#e8e8e8' : secondaryColorScale[3]?.value}; 
                    --button-text: {$secondaryColor.toLowerCase() === '#ffffff' ? '#333333' : secondaryColorScale[11]?.value}">
                    Hover Me
                  </button>
                  <span class="tooltip tooltip-top" style="
                    --tooltip-bg: {$secondaryColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : secondaryColorScale[9]?.value}; 
                    --tooltip-text: {$secondaryColor.toLowerCase() === '#ffffff' ? '#333333' : getContrastColor(secondaryColorScale[9]?.value)};">
                    Tooltip information
                  </span>
                </div>
                
                <div class="tooltip-container">
                  <button class="demo-button primary" style="
                    --button-bg: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).bg : colorScale[8]?.value}; 
                    --button-text: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).text : getContrastColor(colorScale[8]?.value)}; 
                    --button-hover: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).hover : colorScale[7]?.value};">
                    Hover Me
                  </button>
                  <span class="tooltip tooltip-bottom" style="
                    --tooltip-bg: {$baseColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : colorScale[9]?.value}; 
                    --tooltip-text: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : getContrastColor(colorScale[9]?.value)};">
                    Accent tooltip
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Group 6: Card -->
            <div class="component-container">
              <div class="demo-card" style="--card-bg: {secondaryColorScale[1]?.value}; --card-border: {secondaryColorScale[4]?.value}">
                <h3 style="color: {secondaryColorScale[11]?.value}">Card Title</h3>
                <p style="color: {secondaryColorScale[10]?.value}">Card with custom colors based on your selected scheme.</p>
                <button class="demo-button small primary" style="
                  --button-bg: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).bg : colorScale[8]?.value}; 
                  --button-text: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).text : getContrastColor(colorScale[8]?.value)}">
                  Action
                </button>
              </div>
            </div>
            
            <!-- Group 7: Elevated Card -->
            <div class="component-container">
              <div class="demo-card elevated" style="--card-bg: {secondaryColorScale[2]?.value}; --card-shadow: {secondaryColorScale[4]?.value}">
                <div class="card-accent-bar" style="background-color: {colorScale[8]?.value}"></div>
                <div class="card-content">
                  <h3 style="color: {secondaryColorScale[11]?.value}">Elevated Card</h3>
                  <p style="color: {secondaryColorScale[10]?.value}">Card with custom shadow and accent highlight.</p>
                  <button class="demo-button small secondary" style="--button-border: {secondaryColorScale[5]?.value}; --button-bg: {secondaryColorScale[2]?.value}; --button-hover: {secondaryColorScale[3]?.value}; --button-text: {secondaryColorScale[11]?.value}">
                    Action
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Group 8: Star Rating -->
            <div class="component-container center-content">
              <div class="star-rating" style="--star-color: {colorScale[8]?.value}; --star-inactive: {secondaryColorScale[4]?.value};">
                <span class="star active">★</span>
                <span class="star active">★</span>
                <span class="star active">★</span>
                <span class="star active">★</span>
                <span class="star">★</span>
                <span class="rating-text" style="color: {secondaryColorScale[10]?.value};">4.0</span>
              </div>
            </div>
            
            <!-- Group 9: Timer -->
            <div class="component-container center-content">
              <div class="timer" style="--timer-bg: {secondaryColorScale[2]?.value}; --timer-border: {secondaryColorScale[4]?.value}; --timer-text: {secondaryColorScale[11]?.value};">
                <div class="timer-display">00:03:45</div>
                <div class="timer-controls">
                  <button class="timer-button" style="--button-bg: {colorScale[8]?.value}; --button-text: {getContrastColor(colorScale[8]?.value)};">
                    Start
                  </button>
                  <button class="timer-button" style="--button-bg: {secondaryColorScale[5]?.value}; --button-text: {secondaryColorScale[11]?.value};">
                    Reset
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Group 10: Quote -->
            <div class="component-container">
               
              <blockquote class="fancy-quote" style="--quote-bg: {secondaryColorScale[2]?.value}; --quote-border: {colorScale[5]?.value}; --quote-text: {secondaryColorScale[11]?.value};">
                <div class="quote-image-container">
                  <img class='w-full h-full grayscale object-cover rounded-md ' src="Cat.jpg" alt="">
                </div>
                <div class="quote-content">
                  <p style="color: {secondaryColorScale[11]?.value};">"Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs"</p>
                  
                </div>
              </blockquote>
            </div>
            
            <!-- Group 11: Audio Player -->
            <div class="component-container">
              <div class="audio-player" style="--player-bg: {secondaryColorScale[2]?.value}; --player-border: {secondaryColorScale[4]?.value}; --waveform-bg: {secondaryColorScale[4]?.value}; --waveform-fill: {colorScale[8]?.value};">
                <div class="audio-controls">
                  <button class="audio-button play" style="--button-bg: {colorScale[8]?.value}; --button-text: {getContrastColor(colorScale[8]?.value)};">
                    ▶
                  </button>
                  <div class="audio-info" style="color: {secondaryColorScale[11]?.value};">
                    <div class="audio-title">Audio Track</div>
                    <div class="audio-time" style="color: {secondaryColorScale[10]?.value};">0:45 / 3:30</div>
                  </div>
                </div>
                <div class="waveform">
                  <div class="waveform-bars">
                    {#each Array(30) as _, i}
                      <div class="waveform-bar" style="height: {30 + Math.sin(i * 0.4) * 25}%; background-color: {i < 10 ? colorScale[8]?.value : secondaryColorScale[4]?.value};"></div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Group 12: Textarea -->
            <div class="component-container">
              <textarea 
                id="demo-textarea" 
                placeholder="Type multiple lines of text here..." 
                class="demo-textarea" 
                style="--input-border: {secondaryColorScale[5]?.value}; --input-bg: {secondaryColorScale[1]?.value}; --input-focus: {colorScale[8]?.value}"
                rows="3"
              ></textarea>
            </div>
            
            <!-- Group 13: Profile Card -->
            <div class="component-container">
              <div class="profile-card" style="--card-bg: {secondaryColorScale[1]?.value}; --card-border: {secondaryColorScale[4]?.value}">
                <div class="profile-header">
                  <div class="avatar" style="--avatar-bg: {colorScale[5]?.value}; color: {getContrastColor(colorScale[5]?.value)}">
                    JD
                  </div>
                  <div class="profile-info">
                    <h4 style="color: {secondaryColorScale[11]?.value}">User Profile</h4>
                    <p style="color: {secondaryColorScale[10]?.value}">Designer</p>
                  </div>
                </div>
                <div class="profile-body">
                  <p style="color: {secondaryColorScale[10]?.value};">Created 15 projects with 5 team members recently.</p>
                </div>
                <div class="profile-footer" style="--footer-border: {secondaryColorScale[4]?.value};">
                  <button class="demo-button small secondary" style="--button-border: {secondaryColorScale[5]?.value}; --button-bg: {secondaryColorScale[2]?.value}; --button-hover: {secondaryColorScale[3]?.value}; --button-text: {secondaryColorScale[11]?.value};">
                    View
                  </button>
                  <button class="demo-button small accent" style="--button-bg: {colorScale[5]?.value}; --button-text: {colorScale[11]?.value}; --button-border: {colorScale[8]?.value}; --button-hover: {colorScale[6]?.value};">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            <!-- Group 14: Feature Card -->
            <div class="component-container">
              <div class="feature-card" style="--card-bg: {secondaryColorScale[1]?.value}; --card-border: {secondaryColorScale[4]?.value}; --card-accent: {colorScale[5]?.value}; --card-text: {secondaryColorScale[11]?.value}; --card-text-secondary: {secondaryColorScale[10]?.value};">
                <div class="feature-card-inner">
                  <div class="feature-icon-wrapper" style="background-color: {colorScale[3]?.value}; color: {colorScale[9]?.value}; {$baseColor.toLowerCase() === '#ffffff' ? 'border: 1px solid #e2e2e2;' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <div class="feature-content">
                    <h3 class="feature-title">Seamless Integration</h3>
                    <p class="feature-description">Connect with your favorite tools and services with just a few clicks.</p>
                  </div>
                  <div class="feature-footer">
                    <button class="feature-button" style="color: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[9]?.value};">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Group 15: WYSIWYG Editor Actions -->
            <div class="component-container">
              <div class="wysiwyg-editor" style="
                --editor-bg: {secondaryColorScale[1]?.value}; 
                --editor-border: {secondaryColorScale[5]?.value}; 
                --editor-btn-hover: {secondaryColorScale[3]?.value}; 
                --editor-btn-active: {$baseColor.toLowerCase() === '#ffffff' ? '#f5f5f5' : colorScale[3]?.value}; 
                --editor-icon: {secondaryColorScale[10]?.value}; 
                --editor-icon-active: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[9]?.value};">
                <div class="editor-toolbar">
                  <div class="toolbar-group">
                    <button class="toolbar-button active">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 7V4h16v3"></path>
                        <path d="M9 20h6"></path>
                        <path d="M12 4v16"></path>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 2v6h6"></path>
                        <path d="M12 18v-6"></path>
                        <path d="M9 15h6"></path>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                        <path d="M8 7h4"></path>
                        <path d="M8 11h8"></path>
                        <path d="M8 15h6"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <div class="toolbar-group">
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                  
                  <div class="toolbar-group">
                    <button class="toolbar-button active">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 7h16"></path>
                        <path d="M5 12h14"></path>
                        <path d="M6 17h12"></path>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 10h-4V4h-4v6H6l6 6 6-6z"></path>
                        <path d="M18 15v4H6v-4"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <div class="toolbar-group">
                    <button class="toolbar-button active">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                        <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="19" y1="4" x2="10" y2="4"></line>
                        <line x1="14" y1="20" x2="5" y2="20"></line>
                        <line x1="15" y1="4" x2="9" y2="20"></line>
                      </svg>
                    </button>
                    <button class="toolbar-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
                        <line x1="4" y1="21" x2="20" y2="21"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="editor-content" style="--editor-content-bg: {secondaryColorScale[0]?.value}; --editor-content-border: {secondaryColorScale[4]?.value}; --editor-text: {secondaryColorScale[11]?.value};">
                  <p style="margin-bottom: 10px;">This is a <span style="color: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[9]?.value}; font-weight: 500;">rich text editor</span> with custom styling.</p>
                  <p style="margin-bottom: 10px;">You can format text with <span style="font-weight: bold;">bold</span>, <span style="font-style: italic;">italic</span>, or <span style="text-decoration: underline;">underline</span>.</p>
                 
                </div>
              </div>
            </div>
            
            <!-- Group 16: Additional Feature Card -->
            <div class="component-container">
              <div class="feature-card" style="--card-bg: {secondaryColorScale[1]?.value}; --card-border: {secondaryColorScale[4]?.value}; --card-accent: {colorScale[5]?.value}; --card-text: {secondaryColorScale[11]?.value}; --card-text-secondary: {secondaryColorScale[10]?.value};">
                <div class="feature-card-inner">
                  <div class="feature-icon-wrapper" style="background-color: {colorScale[3]?.value}; color: {colorScale[9]?.value}; {$baseColor.toLowerCase() === '#ffffff' ? 'border: 1px solid #e2e2e2;' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <div class="feature-content">
                    <h3 class="feature-title">Smart Analytics</h3>
                    <p class="feature-description">Get detailed insights and reports to help you make better decisions.</p>
                  </div>
                  <div class="feature-footer">
                    <button class="feature-button" style="color: {$baseColor.toLowerCase() === '#ffffff' ? '#333333' : colorScale[9]?.value};">
                      View reports
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
  <!-- MOVED: CSS Export Panel - Now positioned above the color tables -->
  {#if showCssExport}
    <section transition:slide class="css-export-panel" style="--panel-bg: {secondaryColorScale[1]?.value}; --panel-border: {secondaryColorScale[5]?.value}; --panel-header-bg: {colorScale[3]?.value}; --panel-header-text: {colorScale[11]?.value};">
      <div class="export-header" style="background: linear-gradient(to right, {colorScale[2]?.value}, {colorScale[3]?.value});">
        <h2>Export Color System</h2>
        <div class="export-options">
          <label>
            <input 
              type="radio" 
              name="export-format" 
              value="css" 
              checked={exportFormat === 'css'} 
              onclick={() => handleFormatChange('css')}
            />
            CSS Variables
          </label>
          <label>
            <input 
              type="radio" 
              name="export-format" 
              value="scss" 
              checked={exportFormat === 'scss'} 
              onclick={() => handleFormatChange('scss')}
            />
            SCSS Variables
          </label>
        </div>
      </div>
      
      <div class="code-container" style="background-color: {secondaryColorScale[0]?.value};">
        <pre>{cssCode}</pre>
      </div>
      
      <div class="export-actions">
        <button 
          class="demo-button primary" 
          onclick={copyCssCode} 
          style="
            --button-bg: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).bg : colorScale[8]?.value}; 
            --button-text: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, true).text : getContrastColor(colorScale[8]?.value)};"
        >
          Copy to Clipboard
        </button>
        <button 
          class="demo-button accent" 
          onclick={downloadCssCode} 
          style="
            --button-bg: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, false).bg : colorScale[5]?.value}; 
            --button-text: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, false).text : colorScale[11]?.value}; 
            --button-border: {$baseColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : colorScale[8]?.value}; 
            --button-hover: {$baseColor.toLowerCase() === '#ffffff' ? getButtonStyles(true, false).hover : colorScale[6]?.value}"
        >
          Download File
        </button>
        <button 
          class="demo-button secondary" 
          onclick={() => toggleCssExportPanel()} 
          style="
            --button-border: {$secondaryColor.toLowerCase() === '#ffffff' ? '#e2e2e2' : secondaryColorScale[5]?.value}; 
            --button-bg: {$secondaryColor.toLowerCase() === '#ffffff' ? '#f0f0f0' : secondaryColorScale[2]?.value}; 
            --button-hover: {$secondaryColor.toLowerCase() === '#ffffff' ? '#e8e8e8' : secondaryColorScale[3]?.value}; 
            --button-text: {$secondaryColor.toLowerCase() === '#ffffff' ? '#333333' : secondaryColorScale[11]?.value}"
        >
          Close
        </button>
      </div>
    </section>
  {/if}
  
  <section class="color-scale-table">
    <p class='text-2xl font-bold'>Accent Color Scale Reference</p>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Preview</th>
            <th>Hex</th>
            <th>HSL</th>
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
              <td class="actions">
                <button 
                  class="copy-button" 
                  onclick={() => copyColorCode(color, 'hex')}
                  aria-label="Copy hex code"
                >
                  HEX
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
  
  <section class="color-scale-table">
    <p class='text-2xl font-bold'>Base Color Scale Reference</p>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Preview</th>
            <th>Hex</th>
            <th>HSL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each secondaryColorScale as color}
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
              <td class="actions">
                <button 
                  class="copy-button" 
                  onclick={() => copyColorCode(color, 'hex')}
                  aria-label="Copy hex code"
                >
                  HEX
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

<!-- Color picker popups -->
{#if showPrimaryPicker && primaryButtonPosition}
  <div 
    class="color-picker-popup"
    style="left: {Math.min(primaryButtonPosition.left, window.innerWidth - 256)}px; top: {primaryButtonPosition.bottom + 8}px;"
  >
    <div class="color-picker-container">
      <div class="picker-header">
        <span>Accent</span>
        <button class="close-picker" onclick={() => showPrimaryPicker = false}>×</button>
      </div>
      <ColorSelect 
        bind:rgb={primaryRgb}
        class="custom-color-picker"
      />
    </div>
  </div>
{/if}

{#if showSecondaryPicker && secondaryButtonPosition}
  <div 
    class="color-picker-popup"
    style="left: {Math.min(secondaryButtonPosition.left, window.innerWidth - 256)}px; top: {secondaryButtonPosition.bottom + 8}px;"
  >
    <div class="color-picker-container">
      <div class="picker-header">
        <span>Base</span>
        <button class="close-picker" onclick={() => showSecondaryPicker = false}>×</button>
      </div>
      <ColorSelect 
        bind:rgb={secondaryRgb}
        class="custom-color-picker"
      />
    </div>
  </div>
{/if}

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
    grid-template-columns: 314px 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  /* Color Controls Panel */
  .color-controls {
    position: sticky;
    top: 4rem;
    height: fit-content;
    
  }
  
  .controls-container {
    background: var(--surface-color);
    border-radius: 12px;
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
  
  .color-preview-button {
    height: 40px;
    width: 40px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    padding: 0;
    cursor: pointer;
    transition: transform 0.1s ease;
  }
  
  .color-preview-button:hover {
    transform: scale(1.05);
  }
  
  .color-text-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-family: var(--font-mono);
    width: 100%;
  }
  
  .color-picker-wrapper {
    position: relative;
    width: 100%;
    margin-top: 0.5rem;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  :global(.custom-color-picker) {
    width: 100%;
    height: 100px;
    border-radius: 12px;
    overflow: visible !important;
    pointer-events: auto;
    margin-bottom: 8px;
  }
  
  :global(.custom-color-picker canvas) {
    border-radius: 12px !important;
    pointer-events: auto !important;
  }
  
  /* Style the color selector circles for better visibility */
  :global(.custom-color-picker svg circle) {
    r: 5px;
    stroke: white;
    stroke-width: 1.75px;
    pointer-events: none;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
  }
  
  :global(.custom-color-picker svg circle + circle) {
    r: 6px;
    stroke: black;
    stroke-width: 1.25px;
  }
  
  /* Ensure hue slider is visible and functional */
  :global(.custom-color-picker > div) {
    overflow: visible !important;
    pointer-events: auto !important;
  }
  
  /* Override any library styles that might cause issues */
  :global(.custom-color-picker input[type="range"]) {
    pointer-events: auto !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 5 !important;
    height: 16px !important;
    margin: 8px 0 0 0 !important;
  }
  
  /* Ensure the SVG container doesn't clip the hue slider */
  :global(.custom-color-picker svg) {
    overflow: visible !important;
  }
  
  .scale-preview {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }
  
  .scale-preview-header {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: var(--surface-color);
    border-bottom: 1px solid var(--border-color);
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
   
    border-radius: 18px;
    
    overflow: hidden;
  }
  
  .preview-content {
    padding: 0.8rem;
  }
  
  .preview-description {
    color: var(--text-muted);
    margin-bottom: 2rem;
  }
  
  .component-group {
    gap: 1rem;
  }
  
  .component-group h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  .component-group h3 {
   
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    
  }
  
  .component-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }
  
  /* Demo Components */
  .demo-button {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  
  .demo-button.small {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    background-color: var(--button-bg, transparent);
    border: 0;
    color: var(--button-text, var(--text-color));
  }
  
  .demo-button.primary {
    background-color: var(--button-bg, var(--primary-color));
    border: none;
    color: var(--button-text, white);
  }
  
  .demo-button.primary:hover {
    background-color: var(--button-hover, var(--button-bg));
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .demo-button.secondary {
    background-color: var(--button-bg, transparent);
    border: 1px solid var(--button-border, var(--border-color));
    color: var(--button-text, var(--text-color));
  }
  
  .demo-button.secondary:hover {
    background-color: var(--button-hover, var(--surface-color));
    transform: translateY(-1px);
  }
  
  .demo-button.subtle {
    background-color: transparent;
    border: none;
    color: var(--button-text, var(--text-color));
  }
  
  .demo-button.subtle:hover {
    background-color: var(--button-hover, var(--surface-color));
  }
  
  /* Accent button styles */
  .demo-button.accent {
    background-color: var(--button-bg, transparent);
    border: 1px solid var(--button-border, var(--accent-color));
    color: var(--button-text, var(--accent-color));
  }
  
  .demo-button.accent:hover {
    background-color: var(--button-hover, var(--button-bg));
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
  }
  
  .demo-button.accent-outline {
    background-color: transparent;
    border: 1px solid var(--button-border, var(--accent-color));
    color: var(--button-text, var(--accent-color));
  }
  
  .demo-button.accent-outline:hover {
    background-color: var(--button-hover, var(--surface-color));
    transform: translateY(-1px);
  }
  
  .demo-button.accent-subtle {
    background-color: transparent;
    border: none;
    color: var(--button-text, var(--accent-color));
  }
  
  .demo-button.accent-subtle:hover {
    background-color: var(--button-hover, var(--surface-color));
  }
  
  /* Card demos */
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .demo-card {
    padding: 1.5rem;
    border-radius: 12px;
    background-color: var(--card-bg, var(--surface-color));
    border: 1px solid var(--card-border, var(--border-color));
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .demo-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.06);
  }
  
  .demo-card.elevated {
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px var(--card-shadow, var(--border-color));
    padding: 0;
    overflow: hidden;
  }
  
  .card-accent-bar {
    height: 4px;
    width: 100%;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .demo-card.elevated:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px var(--card-shadow, var(--border-color));
  }
  
  .demo-card h3 {
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  .demo-card p {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  /* Profile Card */
  .profile-card {
    padding: 1.5rem;
    border-radius: 12px;
    background-color: var(--card-bg, var(--surface-color));
    border: 1px solid var(--card-border, var(--border-color));
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .profile-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.06);
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
  
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--avatar-bg, #e0e0e0);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9rem;
    flex-shrink: 0;
  }
  
  .profile-info {
    flex: 1;
  }
  
  .profile-info h4 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    line-height: 1.2;
  }
  
  .profile-info p {
    margin: 0;
    font-size: 0.85rem;
  }
  
  .profile-body {
    margin-bottom: 1.25rem;
  }
  
  .profile-body p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .profile-footer {
    padding-top: 1.25rem;
    border-top: 1px solid var(--footer-border, var(--border-color));
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
  }
  
  /* Form demos */
  .form-elements {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
  
  .input-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .demo-input {
    padding: 0.85rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--input-border, var(--border-color));
    background-color: var(--input-bg, var(--background-color));
    font-family: var(--font-sans);
    transition: all 0.2s ease;
    width: 100%;
    font-size: 0.95rem;
  }
  
  .demo-input:focus {
    outline: none;
    border-color: var(--input-focus, var(--primary-color));
    box-shadow: 0 0 0 3px rgba(76, 110, 245, 0.15);
  }
  
  .demo-input.accent:focus {
    border-color: var(--input-focus, var(--accent-color));
    box-shadow: 0 0 0 2px rgba(76, 110, 245, 0.1);
  }
  
  .checkbox-wrapper, .radio-wrapper {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    transition: background-color 0.15s ease;
  }
  
  .checkbox-wrapper:hover, .radio-wrapper:hover {
    background-color: var(--hover-bg, rgba(0, 0, 0, 0.03));
  }
  
  .demo-checkbox, .demo-radio {
    accent-color: var(--checkbox-color, var(--primary-color));
    width: 18px;
    height: 18px;
    cursor: pointer;
    transition: transform 0.1s ease;
    margin: 0;
  }
  
  .demo-checkbox:hover, .demo-radio:hover {
    transform: scale(1.1);
  }
  
  .checkbox-wrapper label, .radio-wrapper label {
    cursor: pointer;
    font-size: 0.95rem;
    user-select: none;
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
    border-radius: 12px;
    border: 1px solid var(--border-color);
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
    
    gap: 0.6rem;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    width: 100%;
    justify-content: center;
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

  /* Export CSS Button */
  .export-css-button {
    width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 1rem;
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .export-css-button:hover {
    background-color: var(--surface-color);
  }

  /* Color picker popup */
  .color-picker-popup {
    position: fixed;
    z-index: 50;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
    animation: fadeInScale 150ms ease-out forwards;
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .color-picker-container {
    background-color: var(--background-color, white);
    border: 1px solid var(--border-color, #e2e2e2);
    border-radius: 16px;
    padding: 18px 16px;
    width: fit-content;
    overflow: visible;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  /* Picker header styling */
  .picker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    padding-left: 0.8rem;
   
   
  }

  .picker-header span {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color, #333);
    display: flex;
    align-items: center;
    gap: 8px;
  }

 

  .close-picker {
    background: transparent;
    border: none;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    padding: 0 5px;
    border-radius: 4px;
  }

  .close-picker:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Color grid styles */
  .color-section {
    margin-bottom: 1.5rem;
  }

  .color-section h3 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }

  .color-description {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    color: var(--text-muted, #777);
  }

  .color-grid {
    display: grid;
    gap: 12px;
    margin-bottom: 1.25rem;
  }

  .accent-grid {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .base-grid {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .swatch-label {
    color: var(--text-muted, #777);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
  }

  .swatch-label.selected {
    font-weight: 500;
    color: var(--text-color, #333);
  }

  .color-swatch-btn {
    width: 32px;
    height: 32px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .color-swatch-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05);
  }

  .color-swatch-btn.selected {
    border: 2px solid white;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  .mt-3 {
    margin-top: 0.75rem;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  /* CSS Export Panel */
  .css-export-panel {
    background-color: var(--panel-bg, #f8f9fa);
    border: 1px solid var(--panel-border, #e2e2e2);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    margin-bottom: 2rem;
    overflow: hidden;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .export-header {
    background-color: var(--panel-header-bg, #f0f0f0);
    padding: 1.5rem;
    border-bottom: 1px solid var(--panel-border, #e2e2e2);
  }
  
  .export-header h2 {
    margin: 0 0 1rem;
    color: var(--panel-header-text, #333);
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .export-options {
    display: flex;
    gap: 2rem;
  }
  
  .export-options label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    cursor: pointer;
    color: var(--panel-header-text, #333);
    font-weight: 500;
  }
  
  .export-options input[type="radio"] {
    accent-color: var(--button-bg, #4c6ef5);
  }
  
  .code-container {
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    overflow-x: auto;
    max-height: 600px;
    overflow-y: auto;
    width: 100%;
    border-radius: 0;
  }
  
  .code-container pre {
    margin: 0;
    font-family: var(--font-mono, 'JetBrains Mono', monospace);
    font-size: 0.9rem;
    line-height: 1.6;
    white-space: pre;
    color: var(--text-color, #333);
  }
  
  .export-actions {
    padding: 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    border-top: 1px solid var(--panel-border, #e2e2e2);
    background-color: var(--panel-bg, #f8f9fa);
  }

  /* Input Row for side-by-side inputs */
  .input-row {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .flex-1 {
    flex: 1;
  }

  /* Textarea Styles */
  .demo-textarea {
    padding: 0.85rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--input-border, var(--border-color));
    background-color: var(--input-bg, var(--background-color));
    font-family: var(--font-sans);
    transition: all 0.2s ease;
    width: 100%;
    font-size: 0.95rem;
    resize: vertical;
    min-height: 100px;
  }

  .demo-textarea:focus {
    outline: none;
    border-color: var(--input-focus, var(--primary-color));
    box-shadow: 0 0 0 3px rgba(76, 110, 245, 0.15);
  }

  /* Number Input Styles */
  .number-input-wrapper {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--input-border);
    overflow: hidden;
    background-color: var(--input-bg);
  }

  .number-control-btn {
    width: 40px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: opacity 0.2s ease;
  }

  .number-control-btn:hover {
    opacity: 0.9;
  }

  .demo-number-input {
    flex: 1;
    border: none;
    text-align: center;
    padding: 0.85rem 0;
    background-color: transparent;
    font-size: 0.95rem;
    -moz-appearance: textfield; /* Firefox */
  }

  .demo-number-input::-webkit-outer-spin-button,
  .demo-number-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Slider Styles */
  .slider-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .demo-slider {
    flex: 1;
    -webkit-appearance: none;
    height: 6px;
    border-radius: 3px;
    background-color: var(--slider-track);
    outline: none;
  }

  .demo-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--slider-thumb);
    cursor: pointer;
    transition: transform 0.1s ease;
  }

  .demo-slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--slider-thumb);
    cursor: pointer;
    border: none;
    transition: transform 0.1s ease;
  }

  .demo-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }

  .demo-slider::-moz-range-thumb:hover {
    transform: scale(1.1);
  }

  .slider-value {
    min-width: 40px;
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-color);
    font-variant-numeric: tabular-nums;
  }

  /* Badge Styles */
  .demo-badge {
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 4px;
    background-color: var(--badge-bg);
    color: var(--badge-text);
    transition: transform 0.1s ease;
  }

  .demo-badge.secondary {
    background-color: var(--badge-bg);
    color: var(--badge-text);
  }

  .demo-badge.outline {
    background-color: transparent;
    border: 1px solid var(--badge-border);
    color: var(--badge-text);
  }

  .demo-badge.subtle {
    background-color: var(--badge-bg);
    color: var(--badge-text);
  }

  .demo-badge.pill {
    border-radius: 20px;
    padding: 0.35em 0.85em;
  }

  .demo-badge.with-dot {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--dot-color);
    display: inline-block;
  }

  .demo-badge:hover {
    transform: translateY(-1px);
  }

  /* Tooltip Styles */
  .tooltip-container {
    position: relative;
    display: inline-block;
  }

  .tooltip {
    visibility: hidden;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--tooltip-bg);
    color: var(--tooltip-text);
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    font-size: 0.85rem;
    line-height: 1.4;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .tooltip::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
  }

  .tooltip-top {
    bottom: 125%;
  }

  .tooltip-top::after {
    top: 100%;
    border-color: var(--tooltip-bg) transparent transparent transparent;
  }

  .tooltip-bottom {
    top: 125%;
  }

  .tooltip-bottom::after {
    bottom: 100%;
    border-color: transparent transparent var(--tooltip-bg) transparent;
  }

  .tooltip-container:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  /* Star Rating Styles */
  .star-rating {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .star {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--star-inactive);
    transition: transform 0.1s ease, color 0.2s ease;
  }

  .star:hover {
    transform: scale(1.1);
  }

  .star.active {
    color: var(--star-color);
  }

  .rating-text {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }

  /* Timer Styles */
  .timer {
    background-color: var(--timer-bg);
    border: 1px solid var(--timer-border);
    border-radius: 8px;
    padding: 1.3rem;
    width: fit-content;
    max-width: 300px;
  }

  .timer-display {
    font-size: 2rem;
    font-variant-numeric: tabular-nums;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--timer-text);
    font-weight: 600;
  }

  .timer-controls {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .timer-button {
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: 4px;
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .timer-button:hover {
    opacity: 0.9;
  }

  /* Quote with Image Styles */
  .fancy-quote {
    display: flex;
    background-color: var(--quote-bg);
    border-radius: 12px;
    padding: 12px;
    margin: 1.5rem 0;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    max-width: 600px;
  }

  .quote-image-container {
    width: 120px;
    flex-shrink: 0;
    overflow: hidden;
    filter: saturate(0.8) contrast(1.1) ;
  }

  .quote-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    
  }

  .quote-content {
    padding: 0 0.5rem;
    position: relative;
  }

  .quote-content p {
    margin: 0 0 0.5rem 0;
    font-style: italic;
    line-height: 1.6;
  }

  .quote-content footer {
    font-size: 0.9rem;
    text-align: right;
  }

  /* Audio Player Styles */
  .audio-player {
    background-color: var(--player-bg);
    border: 1px solid var(--player-border);
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
    max-width: 500px;
  }

  .audio-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .audio-button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.85rem;
    transition: transform 0.1s ease;
  }

  .audio-button:hover {
    transform: scale(1.05);
  }

  .audio-info {
    flex: 1;
  }

  .audio-title {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .audio-time {
    font-size: 0.85rem;
    font-variant-numeric: tabular-nums;
  }

  .waveform {
    height: 60px;
    padding: 0.5rem 0;
  }

  .waveform-bars {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 3px;
  }

  .waveform-bar {
    flex: 1;
    height: 100%;
    border-radius: 2px;
    transition: height 0.3s ease;
  }

  /* Component Grid Layout */
  .components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: calc(1rem - 1.5rem);
    width: 100%;
  }

  .component-container {
    width: 100%;
    border-radius: 0px;
    padding: 1rem 1.3rem;
    background-color: var(--card-bg, rgba(255, 255, 255, 0.01));
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 12px;
  }

  .component-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  }

  .center-items {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .controls-flex-row {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .controls-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .mt-4 {
    margin-top: 1rem;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .components-grid {
      grid-template-columns: 1fr;
    }
    
    .controls-flex-row {
      flex-direction: column;
      gap: 1rem;
    }
  }

  /* Feature Card Styles */
  .feature-card {
    border-radius: 12px;
    background-color: var(--card-bg, white);
    border: 1px solid var(--card-border, #e2e2e2);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .feature-card-inner {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
  }

  .feature-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .feature-content {
    flex: 1;
  }

  .feature-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.75rem;
    color: var(--card-text, #333);
  }

  .feature-description {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0 0 1.5rem;
    color: var(--card-text-secondary, #666);
  }

  .feature-footer {
    border-top: 1px solid var(--card-border, #e2e2e2);
    padding-top: 1rem;
    margin-top: auto;
  }

  .feature-button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.2s ease;
  }

  .feature-button:hover {
    opacity: 0.8;
  }

  /* WYSIWYG Editor Styles */
  .wysiwyg-editor {
    border-radius: 8px;
    border: 1px solid var(--editor-border, #e2e2e2);
    background-color: var(--editor-bg, white);
    overflow: hidden;
  }

  .editor-toolbar {
    padding: 0.5rem;
    border-bottom: 1px solid var(--editor-border, #e2e2e2);
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .toolbar-group {
    display: flex;
    gap: 2px;
    padding: 0 0.25rem;
    border-right: 1px solid var(--editor-border, #e2e2e2);
  }

  .toolbar-group:last-child {
    border-right: none;
  }

  .toolbar-button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: var(--editor-icon, #666);
    transition: all 0.15s ease;
  }

  .toolbar-button:hover {
    background-color: var(--editor-btn-hover, #f5f5f5);
  }

  .toolbar-button.active {
    background-color: var(--editor-btn-active, #ebf5ff);
    color: var(--editor-icon-active, #3b82f6);
  }

  .editor-content {
    padding: 1rem;
    min-height: 100px;
    background-color: var(--editor-content-bg, #fff);
    border-top: 1px solid var(--editor-content-border, #f0f0f0);
  }

  .editor-content p {
    margin: 0;
    color: var(--editor-text, #333);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .components-gridd {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: calc(1rem - 0.5rem);
    
  }
</style> 