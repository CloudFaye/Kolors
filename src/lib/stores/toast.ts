import { writable } from 'svelte/store';

export type ToastType = 'success' | 'error' | 'info';

export type Toast = {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
};

export const toasts = writable<Toast[]>([]);

export function addToast(
  message: string,
  type: ToastType = 'success',
  duration: number = 3000
) {
  const id = Math.random().toString(36).substring(2, 9);
  const toast: Toast = { id, message, type, duration };

  toasts.update((all) => [toast, ...all]);

  // Auto-remove toast after duration
  setTimeout(() => {
    removeToast(id);
  }, duration);

  return id;
}

export function removeToast(id: string) {
  toasts.update((all) => all.filter((t) => t.id !== id));
} 