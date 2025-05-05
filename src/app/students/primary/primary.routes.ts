import { Routes } from '@angular/router';

export const PRIMARY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../primary/pages/primary.component').then((m) => m.PrimaryComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/grade-cards-primary/grade-cards-primary.component').then(
            (m) => m.GradeCardsPrimaryComponent
          ),
      },
      {
        path: ':grade',
        loadComponent: () =>
          import('./pages/primary-list/primary-list.component').then(
            (m) => m.PrimaryListComponent
          ),
      },
      {
        path: ':grade/create',
        loadComponent: () =>
          import('./pages/create-primary/create-primary.component').then(
            (m) => m.CreatePrimaryComponent
          ),
      },
      {
        path: ':grade/edit/:id',
        loadComponent: () =>
          import('./pages/edit-primary/edit-primary.component').then(
            (m) => m.EditPrimaryComponent
          ),
      },
    ],
  },
];
