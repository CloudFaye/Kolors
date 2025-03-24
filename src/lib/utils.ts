import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { addToast } from './stores/toast';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function copyToClipboard(value: string, type: string) {
	navigator.clipboard
		.writeText(value)
		.then(() => {
			addToast(`Copied!`, 'success');
		})
		.catch(() => {
			addToast('Failed to copy to clipboard', 'error');
		});
}
