import { Routes } from '@angular/router';

export const IAM_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../shared/layouts/blank-layout/blank-layout.component').then(
        (m) => m.BlankLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/authentication/authentication.component').then(
            (m) => m.AuthenticationComponent
          ),
        children: [
          { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
          {
            path: 'sign-in',
            loadComponent: () =>
              import('./pages/authentication/sign-in/sign-in.component').then(
                (m) => m.SignInComponent
              ),
          },
          {
            path: 'forgot-password',
            loadComponent: () =>
              import('./pages/authentication/forgot-password/forgot-password.component').then(
                (m) => m.ForgotPasswordComponent
              ),
          },
          {
            path: 'reset-password',
            loadComponent: () =>
              import('./pages/authentication/reset-password/reset-password.component').then(
                (m) => m.ResetPasswordComponent
              ),
          },
          {
            path: 'confirm-email',
            loadComponent: () =>
              import('./pages/authentication/confirm-email/confirm-email.component').then(
                (m) => m.ConfirmEmailComponent
              ),
          },
          {
            path: 'logout',
            loadComponent: () =>
              import('./pages/authentication/logout/logout.component').then(
                (m) => m.LogoutComponent
              ),
          },
        ],
      },
    ],
  },
];
