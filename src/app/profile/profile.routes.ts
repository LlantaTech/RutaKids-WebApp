import { Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/my-profile/my-profile.component').then(
        (m) => m.MyProfileComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/my-profile-settings/my-profile-settings.component').then(
        (m) => m.MyProfileSettingsComponent
      ),
  },
];
