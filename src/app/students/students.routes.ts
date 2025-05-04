import { Routes } from '@angular/router';

export const STUDENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../shared/layouts/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/students.component').then((m) => m.StudentsComponent),
        children: [
          {
            path: 'primary',
            loadComponent: () =>
              import('./pages/primary/grade-cards-primary/grade-cards-primary.component').then(
                (m) => m.GradeCardsPrimaryComponent
              ),
          },
          {
            path: 'primary/:grade',
            loadComponent: () =>
              import('./pages/primary/primary-list/primary-list.component').then(
                (m) => m.PrimaryListComponent
              ),
          },
          {
            path: 'primary/:grade/create',
            loadComponent: () =>
              import('./pages/primary/create-primary/create-primary.component').then(
                (m) => m.CreatePrimaryComponent
              ),
          },
          {
            path: 'primary/:grade/edit/:id',
            loadComponent: () =>
              import('./pages/primary/edit-primary/edit-primary.component').then(
                (m) => m.EditPrimaryComponent
              ),
          },
          {
            path: 'secondary',
            loadComponent: () =>
              import('./pages/secondary/grade-cards-secondary/grade-cards-secondary.component').then(
                (m) => m.GradeCardsSecondaryComponent
              ),
          },
          {
            path: 'secondary/:grade',
            loadComponent: () =>
              import('./pages/secondary/secondary-list/secondary-list.component').then(
                (m) => m.SecondaryListComponent
              ),
          },
          {
            path: 'secondary/:grade/create',
            loadComponent: () =>
              import('./pages/secondary/create-secondary/create-secondary.component').then(
                (m) => m.CreateSecondaryComponent
              ),
          },
          {
            path: 'secondary/:grade/edit/:id',
            loadComponent: () =>
              import('./pages/secondary/edit-secondary/edit-secondary.component').then(
                (m) => m.EditSecondaryComponent
              ),
          },
        ],
      },
    ],
  },
];
