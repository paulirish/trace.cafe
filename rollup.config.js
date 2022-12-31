// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import {default as html, makeHtmlAttributes} from '@rollup/plugin-html';

import {readFileSync} from 'node:fs';

// stolen from https://github.com/rollup/plugins/blob/master/packages/html/src/index.ts
const template = ({attributes, files, meta, publicPath, title }) => { 

  // console.log({attributes}, files);
  const scripts = (files.js || [])
    .map(({ fileName, code }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      // inline the script. no external scripts
      return `<script ${attrs}>
${code}
</script>`;
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
  <body class="state--idle">
   ${readFileSync('./src/body.html', 'utf-8')}
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
    resolve({browser: true}),
    // 
    html({
      template,
      title: 'trace cafe'
    }),
  ]
};