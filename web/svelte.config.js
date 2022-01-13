import preprocess from 'svelte-preprocess';
import adapter_node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter_node()
	}
};

export default config;
