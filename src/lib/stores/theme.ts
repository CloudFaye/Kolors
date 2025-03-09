import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

// Get stored theme or use system preference as default
const getInitialTheme = (): Theme => {
  if (!browser) return 'light';
  
  const storedTheme = localStorage.getItem('theme') as Theme;
  if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
    return storedTheme;
  }
  
  // Default to light
  return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

// Apply theme to document
export function applyTheme(newTheme: Theme) {
  if (!browser) return;
  
  // Set the theme in the store
  theme.set(newTheme);
  
  // Save to localStorage
  localStorage.setItem('theme', newTheme);
  
  // Apply the appropriate class to document
  if (newTheme === 'system') {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
    document.documentElement.style.colorScheme = prefersDark ? 'dark' : 'light';
  } else {
    // Use explicit theme setting
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
  }
}

// Initialize theme on page load
if (browser) {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
  
  // Watch for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentTheme = get(theme);
    if (currentTheme === 'system') {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(e.matches ? 'dark' : 'light');
      document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light';
    }
  });
} 