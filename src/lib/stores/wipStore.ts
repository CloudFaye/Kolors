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
    title: 'Color Systems Explorer Launch',
    description: 'Initial release of the Color Systems Explorer tool with support for browsing popular design systems.',
    date: '2023-03-07',
    type: 'feature'
  },
  {
    id: 2,
    title: 'Added Dark Mode Support',
    description: 'Implemented dark mode toggle for better viewing experience in low-light environments.',
    date: '2023-03-10',
    type: 'feature'
  },
  {
    id: 3,
    title: 'Performance Improvements',
    description: 'Optimized color rendering and improved page load times.',
    date: '2023-03-15',
    type: 'improvement'
  },
  {
    id: 4,
    title: 'Coming Soon: Custom Color System Creation',
    description: 'We\'re working on a feature to let you create and save your own color systems!',
    date: '2023-03-20',
    type: 'announcement'
  },
  {
    id: 5,
    title: 'Mobile Responsiveness',
    description: 'Enhanced the mobile viewing experience with better layouts for small screens.',
    date: '2023-03-25',
    type: 'improvement'
  }
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