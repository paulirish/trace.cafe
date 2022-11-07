// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';


// import commonjs from 'rollup-plugin-commonjs';
// import buble from '@rollup/plugin-buble';
// import { visualizer } from 'rollup-plugin-visualizer';


export default {
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    html(),
  ]
};