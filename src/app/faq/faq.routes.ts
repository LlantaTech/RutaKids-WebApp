import { Routes } from '@angular/router';

export const FAQ_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/faq-page.component').then((m) => m.FaqPageComponent),
  },
];
