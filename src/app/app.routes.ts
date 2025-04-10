import { Routes } from '@angular/router';
import {AuthenticationComponent} from "./iam/pages/authentication/authentication.component";
import {ConfirmEmailComponent} from "./iam/pages/authentication/confirm-email/confirm-email.component";
import {LogoutComponent} from "./iam/pages/authentication/logout/logout.component";
import {ResetPasswordComponent} from "./iam/pages/authentication/reset-password/reset-password.component";
import {SignInComponent} from "./iam/pages/authentication/sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./iam/pages/authentication/forgot-password/forgot-password.component";
import {NotFoundComponent} from "./public/pages/not-found/not-found.component";
import {InternalErrorComponent} from "./public/pages/internal-error/internal-error.component";
import {BlankPageComponent} from "./public/pages/blank-page/blank-page.component";
import {BlankLayoutComponent} from "./shared/layouts/blank-layout/blank-layout.component";
import {DashboardComponent} from "./dashboard/pages/dashboard.component";
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {SettingsComponent} from "./settings/pages/settings.component";
import {PrivacyPolicyComponent} from "./settings/pages/privacy-policy/privacy-policy.component";
import {TermsConditionsComponent} from "./settings/pages/terms-conditions/terms-conditions.component";
import {ChangePasswordComponent} from "./settings/pages/change-password/change-password.component";
import {ChildrenListComponent} from "./children/pages/children-list/children-list.component";
import {ChildrenComponent} from "./children/pages/children.component";
import {CreateChildComponent} from "./children/pages/create-child/create-child.component";
import {EditChildComponent} from "./children/pages/edit-child/edit-child.component";
import {FaqPageComponent} from "./public/pages/faq-page/pages/faq-page.component";
import {ComicSoonComponent} from "./public/pages/comic-soon/comic-soon.component";
import {ProfileComponent} from "./settings/pages/profile/profile.component";
import {MyProfileComponent} from "./settings/pages/profile/my-profile/my-profile.component";
import {MyProfileSettingsComponent} from "./settings/pages/profile/my-profile-settings/my-profile-settings.component";
import {AboutComponent} from "./settings/pages/profile/my-profile/about/about.component";
import {NotificationsComponent} from "./communication/pages/notifications/notifications.component";
import {SchoolTransportationComponent} from "./school-transportation/pages/school-transportation.component";
import {
  SchoolTransportationListComponent
} from "./school-transportation/pages/school-transportation-list/school-transportation-list.component";
import {
  CreateSchoolTransportationComponent
} from "./school-transportation/pages/create-school-transportation/create-school-transportation.component";
import {
  EditSchoolTransportationComponent
} from "./school-transportation/pages/edit-school-transportation/edit-school-transportation.component";

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
      { path: 'dashboard', component: DashboardComponent},
      { path: 'internal-error', component: InternalErrorComponent },
      { path: 'blank-page', component: BlankPageComponent },
      { path: 'faq', component: FaqPageComponent},
      { path: 'comic-soon', component: ComicSoonComponent},
      { path: 'notifications', component: NotificationsComponent},
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: 'change-password', component: ChangePasswordComponent},
          { path: 'privacy-policy', component: PrivacyPolicyComponent},
          { path: 'terms-conditions', component: TermsConditionsComponent},
        ]
      },
      {
        path: 'school-transportation',
        component: SchoolTransportationComponent,
        children: [
          { path: '', component: SchoolTransportationListComponent},
          { path: 'create-school-transportation', component: CreateSchoolTransportationComponent},
          { path: 'edit-school-transportation', component: EditSchoolTransportationComponent},
        ]
      },
      {
        path: 'children',
        component: ChildrenComponent,
        children: [
          { path: '', component: ChildrenListComponent},
          { path: 'create-child', component: CreateChildComponent},
          { path: 'edit-child', component: EditChildComponent},
        ]
      },
      {
        path: 'my-profile',
        component: ProfileComponent,
        children: [
          {
            path: '', component: MyProfileComponent,
            children: [
              { path: '', component: AboutComponent},
            ]
          },
          {path: 'settings', component: MyProfileSettingsComponent},
        ]
      },
      { path: '**', component: NotFoundComponent },
    ]
  },
];
