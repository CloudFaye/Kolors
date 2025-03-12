import { writable } from 'svelte/store';

// Define the type for WIP log entries
export interface WIPEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'feature' | 'improvement' | 'fix' | 'announcement';
}

// Sample WIP log entries
const initialEntries: WIPEntry[] = [
  {
    id: 1,
    title: 'Theme / Palette saving',
    description: 'Save your favorite color palettes and use them later.',
    date: '',
    type: 'feature'
  },
];

// Create stores for WIP entries and popup visibility
export const wipEntries = writable<WIPEntry[]>(initialEntries);
export const isWipPopupOpen = writable<boolean>(false);

// Helper functions to manage the popup
export function openWipPopup() {
  isWipPopupOpen.set(true);
}

export function closeWipPopup() {
  isWipPopupOpen.set(false);
}

export function toggleWipPopup() {
  isWipPopupOpen.update(value => !value);
} 