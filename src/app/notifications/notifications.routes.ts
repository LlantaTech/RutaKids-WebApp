import { Routes } from '@angular/router';

export const NOTIFICATIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../shared/layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/notifications-list/notifications-list.component').then(
            (m) => m.NotificationsListComponent
          ),
      },
    ],
  },
];
