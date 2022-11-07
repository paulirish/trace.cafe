// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import {default as html, makeHtmlAttributes} from '@rollup/plugin-html';

import {readFileSync} from 'node:fs';

// import commonjs from 'rollup-plugin-commonjs';
// import buble from '@rollup/plugin-buble';
// import { visualizer } from 'rollup-plugin-visualizer';



// stolen from https://github.com/rollup/plugins/blob/master/packages/html/src/index.ts
const template = ({attributes, files, meta, publicPath, title }) => { 

  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script src="${publicPath}${fileName}"${attrs}></script>`;
    })
    .join('\n');

  const links = (files.css || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.link);
      return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join('\n');

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join('\n');

  return `
<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
  <head>
    <title>${title}</title>
    ${metas}
    <!-- <link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css">  -->
    <style>
      ${readFileSync('./src/style.css', 'utf-8')}
    </style>
    ${links}
  </head>
  <body>
    <main>
      <h2>sup</h2>
    </main>
    ${scripts}
  </body>
</html>`;

 }



export default {
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    // 
    html({
      template,
      title: 'Trace Share Server'
    }),
  ]
};