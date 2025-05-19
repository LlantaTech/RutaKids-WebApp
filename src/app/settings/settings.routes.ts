import { Routes } from '@angular/router';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/settings.component').then((m) => m.SettingsComponent),
    children: [
      {
        path: 'change-password',
        loadComponent: () =>
          import('./pages/change-password/change-password.component').then((m) => m.ChangePasswordComponent),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
      },
      {
        path: 'terms-conditions',
        loadComponent: () =>
          import('./pages/terms-conditions/terms-conditions.component').then((m) => m.TermsConditionsComponent),
      },
    ],
  },
];
