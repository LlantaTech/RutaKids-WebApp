import {Component, ViewChild} from '@angular/core';
import {Editor, NgxEditorModule} from "ngx-editor";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {Router} from "@angular/router";
import {SchoolTransportationService} from "../../services/school-transportation.service";
import {SchoolTransportationFormComponent} from "../../components/school-transportation-form/school-transportation-form.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-create-school-transportation',
  standalone: true,
  imports: [
    CommonModule,
    NgxEditorModule,
    HttpClientModule,
    SchoolTransportationFormComponent
  ],
  templateUrl: './create-school-transportation.component.html',
  styleUrl: './create-school-transportation.component.scss'
})
export class CreateSchoolTransportationComponent {

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
