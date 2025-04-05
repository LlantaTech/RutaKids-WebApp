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

export const routes: Routes = [
  {
    path: '',redirectTo: 'authentication', pathMatch: 'full'
  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo:'sign-in', pathMatch: 'full'},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'lock-screen', component: LockScreenComponent},
      {path: 'confirm-email', component: ConfirmEmailComponent},
      {path: 'logout', component: LogoutComponent},
    ]
  },
  { path: 'internal-error', component: InternalErrorComponent },


  { path: '**', component: NotFoundComponent }
];
