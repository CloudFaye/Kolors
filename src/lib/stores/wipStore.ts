import { writable } from 'svelte/store';

let date = new Date();

export interface WIPEntry {
	id: number;
	title: string;
	description: string;
	date: string;
	type: 'feature' | 'improvement' | 'fix' | 'announcement';
}

const initialEntries: WIPEntry[] = [
	{
		id: 1,
		title: 'Updating Tailwind, Stripe and Apple color missing color groups.....🪄',
		description: '',
		date: '',
		type: 'announcement'
	},
	{
		id: 2,
		title: 'Improved IBM color system 🎨',
		description: 'Added missing groups from the IBM color system',
		date: date.toISOString(),
		type: 'improvement'
	}
];

export const wipEntries = writable<WIPEntry[]>(initialEntries);
export const isWipPopupOpen = writable<boolean>(false);

export function openWipPopup() {
	isWipPopupOpen.set(true);
}

export function closeWipPopup() {
	isWipPopupOpen.set(false);
}

export function toggleWipPopup() {
	isWipPopupOpen.update((value) => !value);
}
