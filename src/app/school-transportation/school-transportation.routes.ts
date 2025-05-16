import { Routes } from '@angular/router';

export const SCHOOL_TRANSPORTATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/school-transportation.component').then(
        (m) => m.SchoolTransportationComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/school-transportation-list/school-transportation-list.component').then(
            (m) => m.SchoolTransportationListComponent
          ),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/create-school-transportation/create-school-transportation.component').then(
            (m) => m.CreateSchoolTransportationComponent
          ),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./pages/edit-school-transportation/edit-school-transportation.component').then(
            (m) => m.EditSchoolTransportationComponent
          ),
      },
    ],
  },
];
