import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import bootstrap from './src/main.server';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = join(process.cwd(), 'dist', 'llantatech', 'browser');
  const indexHtml = join(browserDistFolder, 'index.csr.html');


  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Servir archivos estáticos desde browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // SSR para rutas normales
  server.get('*', (req, res, next) => {
    const { originalUrl } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: originalUrl,
        publicPath: browserDistFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' }
        ]
      })
      .then(html => res.send(html))
      .catch(err => {
        console.error('SSR error:', err);
        next(err);
      });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`✅ Node Express server listening on http://localhost:${port}`);
  });
}

run();
