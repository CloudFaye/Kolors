<script lang="ts">
  import { wipEntries, isWipPopupOpen, closeWipPopup, type WIPEntry } from '$lib/stores/wipStore';
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
  
  let popupRef: HTMLDivElement;
  
  // Function to handle clicking outside the popup to close it
  function handleClickOutside(event: MouseEvent) {
    if (popupRef && !popupRef.contains(event.target as Node) && $isWipPopupOpen) {
      closeWipPopup();
    }
  }
  
  // Function to handle ESC key to close the popup
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && $isWipPopupOpen) {
      closeWipPopup();
    }
  }
  
  // Format date to a more readable format with SSR safety
  function formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      // Check if date is valid
      if (isNaN(date.getTime())) return dateString;
      
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      // Fallback for SSR or any other errors
      return dateString;
    }
  }
  
  // Get an icon based on entry type
  function getTypeIcon(type: WIPEntry['type']): string {
    switch(type) {
      case 'feature':
        return ' →';
      case 'improvement':
        return '✅';
      case 'fix':
        return '✅';
      case 'announcement':
        return '🔜';
      default:
        return '📋';
    }
  }
  
  // Add event listeners when component mounts - only in browser environment
  onMount(() => {
    if (browser) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeydown);
    }
  });
  
  // Clean up event listeners when component is destroyed - only in browser environment
  onDestroy(() => {
    if (browser) {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    }
  });
</script>

{#if $isWipPopupOpen}
  <div transition:slide class="wip-popup" bind:this={popupRef}>
    <div class="wip-popup-header">
      <h2 class='wip-popup-title'>Todos</h2>
    </div>
    
    <div class="wip-entries">
      {#each $wipEntries as entry, index (entry.id)}
        <div class="wip-entry" class:announcement={entry.type === 'announcement'}>
          <div class="entry-icon {entry.type}">
            {getTypeIcon(entry.type)}
          </div>
          
          <div class="entry-content">
            <h3>{entry.title}</h3>
            <p class='descr'>{entry.description}</p>
            <div class="entry-meta">
              <span class="entry-date">{formatDate(entry.date)}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .wip-popup {
    position: fixed;
    bottom: 80px; /* Positioned above the hammer button */
    right: 20px;
    width: 320px;
    max-height: 70vh;
    overflow-y: auto;
    background-color: var(--surface-color, white);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 999;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color, #e5e7eb);
  }
  
  .wip-popup-header {
    padding: 16px;
  
    position: sticky;
    top: 0;
    background-color: var(--surface-color, white);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  
  .wip-popup-header h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .wip-entries {
    padding: 12px 16px 16px;
    display: flex;
    flex-direction: column;
  }
  
  .wip-entry {
    display: flex;
    position: relative;
    padding: 8px 0;
  }
  
  .entry-icon {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 12px;
    font-size: 0.9rem;
    background-color: transparent;
    color: #daa41e;
  }
  
  .entry-icon.announcement {
    background-color: #fef3c7;
    color: #92400e;
  }
  
  .entry-line {
    position: absolute;
    left: 14px;
    top: 36px; /* Adjusted to align with the icon */
    width: 2px;
    height: calc(100% - 20px);
    
    z-index: 1;
  }
  
  .last-entry .entry-line {
    display: none;
  }
  
  .entry-content {
    flex: 1;
    padding-top: 4px;
  }
  
  .entry-content h3 {
    margin: 0 0 4px 0;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
 .descr {
  margin: 0 0 8px 0;
  font-size: 0.8rem;
  color: var(--descr, #868686);
  line-height: 1.2;
 }
  
  .entry-meta {
    display: flex;
    gap: 8px;
    font-size: 0.7rem;
    color: var(--text-muted, #3f3f3f);
    flex-wrap: wrap;
  }
  
  .entry-type {
    padding: 2px 8px;
    border-radius: 20px;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 0.65rem;
  }
  
  .entry-type.feature {
    background-color: #dbeafe;
    color: #1e40af;
  }
  
  .entry-type.improvement {
    background-color: #dcfce7;
    color: #166534;
  }
  
  .entry-type.fix {
    background-color: #fee2e2;
    color: #b91c1c;
  }
  
  .entry-type.announcement {
    background-color: #fef3c7;
    color: #92400e;
  }
  
  .announcement {
    border-radius: 12px;
    padding: 4px 0;
    margin: 4px 0;
  }
  
  /* Scroll styling */
  .wip-popup::-webkit-scrollbar {
    width: 3px;
  }
  
  .wip-popup::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .wip-popup::-webkit-scrollbar-thumb {
    background-color: var(--border-color, #e5e7eb);
    border-radius: 20px;
    border: 2px solid var(--surface-color, white);
  }
  
  
  @media (max-width: 500px) {
    .wip-popup {
      width: calc(100% - 40px);
      right: 20px;
      bottom: 70px;
    }
  }
  

  @media (prefers-color-scheme: light) {
    .wip-popup {
      background-color: var(--surface-color, #1e1e1e);
      border-color: var(--border-color, #2e2e2e);
    }
    
    .wip-popup-header {
      background-color: var(--surface-color, #1e1e1e);
      
    }

    .entry-icon{
      color: #ffffff;
    }
    
    .entry-content p {
      color: var(--text-secondary, #505050);
    }

    .descr p{
      color: var(--descr, #646464);
    }
    
    .entry-line {
      background-color: var(--border-color, #2e2e2e);
    }
    
    .wip-popup::-webkit-scrollbar-thumb {
      background-color: var(--border-color, #2e2e2e);
      border: 2px solid var(--surface-color, #1e1e1e);
    }
  }

  .wip-popup-title{
    font-size: 0.8rem;
  }
</style> 