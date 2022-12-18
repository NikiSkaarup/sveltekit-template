import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { isoImport } from 'vite-plugin-iso-import';

const config: UserConfig = {
	plugins: [sveltekit(), imagetools(), isoImport()],
	resolve: {
		alias: {
			$types: path.resolve(__dirname, './types')
		}
	}
};

export default config;
