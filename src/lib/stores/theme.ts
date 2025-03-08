import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

// Get stored theme or use system preference as default
const getInitialTheme = (): Theme => {
  if (!browser) return 'light';
  
  const storedTheme = localStorage.getItem('theme') as Theme;
  if (storedTheme) return storedTheme;
  
  // Default to system preference
  return 'system';
};

export const theme = writable<Theme>(getInitialTheme());

// Apply theme to document
export function applyTheme(newTheme: Theme) {
  if (!browser) return;
  
  theme.set(newTheme);
  localStorage.setItem('theme', newTheme);
  
  if (newTheme === 'system') {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
    document.documentElement.style.colorScheme = prefersDark ? 'dark' : 'light';
  } else {
    // Use selected theme
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.style.colorScheme = newTheme;
  }
}

// Initialize theme on page load
if (browser) {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
  
  // Watch for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (theme.subscribe(current => current === 'system')) {
      document.documentElement.classList.toggle('dark', e.matches);
      document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light';
    }
  });
} 