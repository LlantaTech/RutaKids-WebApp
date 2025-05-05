import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../shared/layouts/blank-layout/blank-layout.component').then(
        (m) => m.BlankLayoutComponent
      ),
    children: [
      {
        path: 'internal-error',
        loadComponent: () =>
          import('./pages/internal-error/internal-error.component').then(
            (m) => m.InternalErrorComponent
          ),
      },
      {
        path: 'blank-page',
        loadComponent: () =>
          import('./pages/blank-page/blank-page.component').then(
            (m) => m.BlankPageComponent
          ),
      },
      {
        path: 'comic-soon',
        loadComponent: () =>
          import('./pages/comic-soon/comic-soon.component').then(
            (m) => m.ComicSoonComponent
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
      },
    ],
  },
];
