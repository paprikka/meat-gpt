import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		imagetools({
			defaultDirectives(url) {
				return new URLSearchParams({
					format: 'webp'
				});
			}
		}),
		sveltekit()
	]
});
