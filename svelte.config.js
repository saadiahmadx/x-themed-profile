import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	extensions: ['.svelte'],
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$components: 'src/components',
			$lib: 'src/components',
			$routes: 'src/routes',
			$db: 'src/db',
		}
	},
	preprocess: [vitePreprocess()]
};
export default config;
