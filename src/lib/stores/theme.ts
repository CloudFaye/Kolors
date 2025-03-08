import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

// Default to light theme instead of system
const initialTheme: Theme = browser 
  ? (localStorage.getItem('theme') as Theme) || 'light'
  : 'light';

export const theme = writable<Theme>(initialTheme);

// Apply theme to document
export function applyTheme(newTheme: Theme) {
  if (!browser) return;
  
  theme.set(newTheme);
  localStorage.setItem('theme', newTheme);
  
  if (newTheme === 'system') {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  } else {
    // Use selected theme
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }
}

// Initialize theme
if (browser) {
  applyTheme(initialTheme);
  
  // Watch for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (initialTheme === 'system') {
      document.documentElement.classList.toggle('dark', e.matches);
    }
  });
} 