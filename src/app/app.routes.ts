import {Routes} from '@angular/router';
import {CreateSchoolRoutesComponent} from "./school-routes/pages/create-school-routes/create-school-routes.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./iam/iam.routes').then((m) => m.IAM_ROUTES)
  },
  {
    path: '',
    loadComponent:() =>
      import('./shared/layouts/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.routes').then((m) => m.PROFILE_ROUTES)
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./students/students.routes').then((m) => m.STUDENTS_ROUTES)
      },
      {
        path: 'school-transportation',
        loadChildren: () =>
          import('./school-transportation/school-transportation.routes').then((m) => m.SCHOOL_TRANSPORTATION_ROUTES)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.routes').then((m) => m.NOTIFICATIONS_ROUTES)
      },
      { path: 'settings',
        loadChildren:() =>
          import('./settings/settings.routes').then((m) => m.SETTINGS_ROUTES)
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./public/faq/faq.routes').then((m) => m.FAQ_ROUTES)
      },
      {
        path:'routes', component: CreateSchoolRoutesComponent
      }
    ]
  },
  {
    path: '',
    loadChildren: () =>
      import('./public/public.routes').then((m) => m.PUBLIC_ROUTES)
  }
];
