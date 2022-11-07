// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import buble from '@rollup/plugin-buble';
// import { visualizer } from 'rollup-plugin-visualizer';


export default {
  input: 'src/mkay.html',
  output: {
    file: 'dist/app.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    // buble({
    //   jsx: 'h',
    //   objectAssign: 'Object.assign',
    //   target: { chrome: 71, safari: 11.1, firefox: 64 }, // roughly disable ES feature transpilation
		// }),
    // commonjs(),
    // visualizer(), // build and view stats.html
  ]
};