import {Component, ViewChild} from '@angular/core';
import {NgxEditorModule} from "ngx-editor";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {Router} from "@angular/router";
import {SchoolTransportationService} from "../../services/school-transportation.service";
import {SchoolTransportationFormComponent} from "../../components/school-transportation-form/school-transportation-form.component";
import {} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {BreadcrumbComponent} from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-create-school-transportation',
  standalone: true,
  imports: [
    CommonModule,
    NgxEditorModule,

// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
    SchoolTransportationFormComponent,
    BreadcrumbComponent
  ],
  templateUrl: './create-school-transportation.component.html',
  styleUrls: ['./create-school-transportation.component.scss']
})
export class CreateSchoolTransportationComponent {

  breadcrumbTitle = 'Crear Movilidad';
  breadcrumbPaths = ['Movilidad', 'Crear'];

  @ViewChild('formRef') formComponent!: SchoolTransportationFormComponent;

    formData = {
        dni: '',
        licenseCode: '',
        firstName: '',
        paternalLastName: '',
        maternalLastName: '',
        phone: '',
        email: '',
        address: '',
        vehiclePlate: '',
        vehicleBrand: '',
        vehicleModel: '',
        vehicleColor: '',
        driverPhoto: '',
        vehiclePhoto: ''
    };

    onSubmit(): void {
      this.schoolTransportationService.create(this.formData).subscribe({
        next: () => this.router.navigate(['/school-transportation']),
        error: err => console.error('Error al guardar movilidad:', err)
      });
    }

    onCancel(): void {
        this.router.navigate(['/school-transportation']);
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private schoolTransportationService: SchoolTransportationService,
        private router: Router
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}
