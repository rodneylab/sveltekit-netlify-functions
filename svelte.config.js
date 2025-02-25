/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: ['.svelte', '.md', '.svelte.md'],
	preprocess: [vitePreprocess({})],
	kit: {
		adapter: adapter({ precompress: true }),
	},
};

export default config;
