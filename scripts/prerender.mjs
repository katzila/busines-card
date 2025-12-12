import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (...segments) => path.resolve(__dirname, '..', ...segments);

const templatePath = resolve('dist', 'index.html');
const ssrBundlePath = resolve('dist-ssr', 'entry-server.js');

const [templateHtml, { render }] = await Promise.all([
  readFile(templatePath, 'utf-8'),
  import(ssrBundlePath)
]);

const appHtml = await render();
const finalHtml = templateHtml.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

await writeFile(templatePath, finalHtml, 'utf-8');
console.log('Prerender complete: dist/index.html updated with SSR markup');
