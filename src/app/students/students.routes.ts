import { Routes } from '@angular/router';

export const STUDENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./students.component').then((m) => m.StudentsComponent),
    children: [
      {
        path: 'primary',
        loadChildren: () =>
          import('./primary/primary.routes').then((m) => m.PRIMARY_ROUTES),
      },
      {
        path: 'secondary',
        loadChildren: () =>
          import('./secondary/secondary.routes').then((m) => m.SECONDARY_ROUTES),
      },
    ],
  },
];
