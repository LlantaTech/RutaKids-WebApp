import {Routes} from '@angular/router';
import {AuthenticationComponent} from "./iam/pages/authentication/authentication.component";
import {ConfirmEmailComponent} from "./iam/pages/authentication/confirm-email/confirm-email.component";
import {LogoutComponent} from "./iam/pages/authentication/logout/logout.component";
import {ResetPasswordComponent} from "./iam/pages/authentication/reset-password/reset-password.component";
import {SignInComponent} from "./iam/pages/authentication/sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./iam/pages/authentication/forgot-password/forgot-password.component";
import {BlankLayoutComponent} from "./shared/layouts/blank-layout/blank-layout.component";
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {ProfileComponent} from "./profile/pages/profile.component";
import {MyProfileComponent} from "./profile/pages/my-profile/my-profile.component";
import {MyProfileSettingsComponent} from "./profile/pages/my-profile-settings/my-profile-settings.component";
import {AboutComponent} from "./profile/pages/my-profile/about/about.component";

export const routes: Routes = [
  {path: '', redirectTo: 'authentication', pathMatch: 'full'},
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
          {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
          {path: 'sign-in', component: SignInComponent},
          {path: 'forgot-password', component: ForgotPasswordComponent},
          {path: 'reset-password', component: ResetPasswordComponent},
          {path: 'confirm-email', component: ConfirmEmailComponent},
          {path: 'logout', component: LogoutComponent},
        ]
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'my-profile',
        component: ProfileComponent,
        children: [
          {
            path: '', component: MyProfileComponent,
            children: [
              {path: '', component: AboutComponent},
            ]
          },
          {path: 'settings', component: MyProfileSettingsComponent},
        ]
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./students/students.routes').then((m) => m.STUDENTS_ROUTES)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.routes').then((m) => m.SETTINGS_ROUTES)
      },
      {
        path: 'school-transportation',
        loadChildren: () =>
          import('./school-transportation/school-transportation.routes').then((m) => m.SCHOOL_TRANSPORTATION_ROUTES)
      },
      {
        path: '',
        loadChildren: () =>
          import('./public/public.routes').then((m) => m.PUBLIC_ROUTES)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.routes').then((m) => m.NOTIFICATIONS_ROUTES)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.routes').then((m) => m.PROFILE_ROUTES)
      },
    ]
  },
];
