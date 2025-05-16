import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layouts/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: 'test',
        loadComponent: () =>
          import('./school-routes/pages/create-school-routes/create-school-routes.component').then(m => m.CreateSchoolRoutesComponent)
      }
    ]
  }
];
