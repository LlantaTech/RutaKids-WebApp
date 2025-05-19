import { Routes } from '@angular/router';

export const SCHOOL_TRANSPORTATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/school-routes.component').then(
        (m) => m.SchoolRoutesComponent
      ),
    children: [
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/create-school-routes/create-school-routes.component').then(
            (m) => m.CreateSchoolRoutesComponent
          ),
      }
    ],
  },
];
