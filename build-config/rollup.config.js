import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from '@rollup/plugin-buble';
import extensions from 'rollup-plugin-extensions';

export default {
	input: 'src/lib.js',
	output: {
		name: 'MyComponent',
		exports: 'named'
	},
	plugins: [
		vue({
			compileTemplate: true,
			css: true,
		}),
		commonjs(),
		buble(),
		extensions({
			extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue'],
			resolveIndex: true,
		})
	],
};
