import { Routes } from '@angular/router';
import {AuthenticationComponent} from "./iam/pages/authentication/authentication.component";
import {ConfirmEmailComponent} from "./iam/pages/authentication/confirm-email/confirm-email.component";
import {LockScreenComponent} from "./iam/pages/authentication/lock-screen/lock-screen.component";
import {LogoutComponent} from "./iam/pages/authentication/logout/logout.component";
import {ResetPasswordComponent} from "./iam/pages/authentication/reset-password/reset-password.component";
import {SignInComponent} from "./iam/pages/authentication/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/authentication/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./iam/pages/authentication/forgot-password/forgot-password.component";
import {NotFoundComponent} from "./public/pages/not-found/not-found.component";
import {InternalErrorComponent} from "./public/pages/internal-error/internal-error.component";
import {BlankPageComponent} from "./public/pages/blank-page/blank-page.component";
import {BlankLayoutComponent} from "./shared/layouts/blank-layout/blank-layout.component";
import {DashboardComponent} from "./dashboard/pages/dashboard.component";
import {AppComponent} from "./app.component";
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {SettingsComponent} from "./settings/pages/settings.component";
import {PrivacyPolicyComponent} from "./settings/pages/privacy-policy/privacy-policy.component";
import {TermsConditionsComponent} from "./settings/pages/terms-conditions/terms-conditions.component";
import {ChangePasswordComponent} from "./settings/pages/change-password/change-password.component";

export const routes: Routes = [
  { path: '',redirectTo: 'authentication', pathMatch: 'full' },
  { path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
          {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
          {path: 'sign-in', component: SignInComponent},
          {path: 'sign-up', component: SignUpComponent},
          {path: 'forgot-password', component: ForgotPasswordComponent},
          {path: 'reset-password', component: ResetPasswordComponent},
          {path: 'lock-screen', component: LockScreenComponent},
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
      {path: 'dashboard', component: DashboardComponent},
      { path: 'internal-error', component: InternalErrorComponent },
      { path: 'blank-page', component: BlankPageComponent },
      { path: 'settings',
        component: SettingsComponent,
        children: [
          {path: 'change-password', component: ChangePasswordComponent},
          {path: 'privacy-policy', component: PrivacyPolicyComponent},
          {path: 'terms-conditions', component: TermsConditionsComponent},
        ]
      },
      { path: '**', component: NotFoundComponent },
    ]
  },
];
