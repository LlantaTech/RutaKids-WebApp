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
import {DriversComponent} from "./drivers/pages/drivers.component";
import {CreateDriverComponent} from "./drivers/pages/create-driver/create-driver.component";
import {DriverCardsComponent} from "./drivers/pages/driver-cards/driver-cards.component";
import {VehicleComponent} from "./vehicles/pages/vehicle.component";
import {CreateVehicleComponent} from "./vehicles/pages/create-vehicle/create-vehicle.component";
import {EditVehicleComponent} from "./vehicles/pages/edit-vehicle/edit-vehicle.component";
import {VehicleListComponent} from "./vehicles/pages/vehicle-list/vehicle-list.component";
import {ChildrenListComponent} from "./children/pages/children-list/children-list.component";
import {ChildrenComponent} from "./children/pages/children.component";
import {CreateChildComponent} from "./children/pages/create-child/create-child.component";
import {EditChildComponent} from "./children/pages/edit-child/edit-child.component";
import {FaqPageComponent} from "./public/pages/faq-page/pages/faq-page.component";
import {ComicSoonComponent} from "./public/pages/comic-soon/comic-soon.component";

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
      { path: 'settings',
        component: SettingsComponent,
        children: [
          { path: 'change-password', component: ChangePasswordComponent},
          { path: 'privacy-policy', component: PrivacyPolicyComponent},
          { path: 'terms-conditions', component: TermsConditionsComponent},
        ]
      },
      {
        path: 'drivers',
        component: DriversComponent,
        children: [
          { path: '', component: DriverCardsComponent},
          { path: 'create-driver', component: CreateDriverComponent},
        ]
      },
      {
        path: 'vehicles',
        component: VehicleComponent,
        children: [
          { path: '', component: VehicleListComponent},
          { path: 'create-vehicle', component: CreateVehicleComponent},
          { path: 'edit-vehicle', component: EditVehicleComponent},
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
      { path: 'my-profile', component: ComicSoonComponent},
      { path: 'comic-soon', component: ComicSoonComponent},
      { path: '**', component: NotFoundComponent },
    ]
  },
];
