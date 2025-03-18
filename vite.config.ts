import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ['svelte-color-select']
	},
	ssr: {
		noExternal: ['svelte-color-select']
	}
});
