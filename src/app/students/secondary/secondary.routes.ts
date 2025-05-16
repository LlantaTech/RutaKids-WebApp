import { Routes } from '@angular/router';

export const SECONDARY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../secondary/pages/secondary.component').then((m) => m.SecondaryComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/grade-cards-secondary/grade-cards-secondary.component').then(
            (m) => m.GradeCardsSecondaryComponent
          ),
      },
      {
        path: ':grade',
        loadComponent: () =>
          import('./pages/secondary-list/secondary-list.component').then(
            (m) => m.SecondaryListComponent
          ),
      },
      {
        path: ':grade/create',
        loadComponent: () =>
          import('./pages/create-secondary/create-secondary.component').then(
            (m) => m.CreateSecondaryComponent
          ),
      },
      {
        path: ':grade/edit/:id',
        loadComponent: () =>
          import('./pages/edit-secondary/edit-secondary.component').then(
            (m) => m.EditSecondaryComponent
          ),
      },
    ],
  },
];
