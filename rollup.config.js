// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import {default as html, makeHtmlAttributes} from '@rollup/plugin-html';
import terser from '@rollup/plugin-terser';
import {readFileSync, writeFileSync} from 'node:fs';
import {cpSync, existsSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {homedir} from 'node:os';


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
<html lang=en class=state--landing>
  <head>
    <title>${title}</title>
    ${metas}
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕</text></svg>">
    <style>
      ${readFileSync('./src/style.css', 'utf-8')}
    </style>
    ${links}
  </head>
  <body>
   ${readFileSync('./src/body.html', 'utf-8')}
   ${scripts}
  </body>
</html>`;
 };

 const viewonlyTemplate = ({attributes, files, meta, publicPath, title }) => {
  const scripts = (files.js || [])
    .map(({ fileName, code }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      // inline the script. no external scripts
      return `<script ${attrs}>
${code}
</script>`;
    })
    .join('\n');

  return `
<!doctype html>
<html lang=en class="state--landing" viewonly>
  <head>
    <title>${title}</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>">
    <style>
      ${readFileSync('./src/style.css', 'utf-8')}
    </style>
  </head>
  <body>
   ${readFileSync('./src/viewonly.html', 'utf-8')}
   ${scripts}
  </body>
</html>`;
 };

 const plugins = [
  nodeResolve({browser: true}),
  {
    // For bundlebuddy
    generateBundle(options) {
      const deps = [];
      for (const id of this.getModuleIds()) {
        const m = this.getModuleInfo(id);
        if (m != null && !m.isExternal) {
          for (const target of m.importedIds) {
            deps.push({ source: m.id, target })
          }
        }
      }
      if (!options.file) return;
      const graphFile = options.file.replace(/\.js$/, '.graph.json');
      writeFileSync(graphFile, JSON.stringify(deps, null, 2));
    },
  }
];

const copyToFieldTracePlugin = {
  name: 'copy-to-fieldtrace',
  async writeBundle(options) {
    const destDir = join(homedir(), 'code', 'fieldtrace', 'dist', 'site', 'view');
    if (!options.file || !existsSync(destDir)) return;

    const outputDir = dirname(options.file);
    cpSync(join(outputDir, 'viewonly.html'), join(destDir, 'index.html'), {force: true});
    cpSync(join(outputDir, 'viewonly.js'), join(destDir, 'viewonly.js'), {force: true});
    cpSync(join(outputDir, 'viewonly.js.map'), join(destDir, 'viewonly.js.map'), {force: true});
    console.log('Copied dist/viewonly* to fieldtrace')
  },
};

export default [{
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    ...plugins,
    // With this, we dont minify when building via watch.
    !process.env.INWATCHBUILD &&
      terser({
        ecma: 2021,
        output: {
          comments: (node, comment) => {
            const text = comment.value;
            if (text.includes('The Lighthouse Authors') && comment.line > 1) return false;
            return /@ts-nocheck - Prevent tsc|@preserve|@license|@cc_on|^!/i.test(text);
          },
          max_line_len: 1000,
        },
      }),
    html({
      template,
      title: 'trace.cafe'
    }),
  ],
}, {
  input: 'src/viewonly.js',
  output: {
    file: 'dist/viewonly.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    ...plugins,
    html({
      template: viewonlyTemplate,
      fileName: 'viewonly.html',
      title: 'fieldtrace view'
    }),
    copyToFieldTracePlugin,
  ],
}];
