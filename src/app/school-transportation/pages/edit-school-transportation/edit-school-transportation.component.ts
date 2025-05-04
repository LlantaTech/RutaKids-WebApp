import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUploadModule} from "@iplab/ngx-file-upload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule, } from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {Editor, NgxEditorModule} from "ngx-editor";
import {ActivatedRoute, Router} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {
  SchoolTransportationFormComponent
} from "../../components/school-transportation-form/school-transportation-form.component";
import {SchoolTransportation} from "../../model/school-transportation";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {SchoolTransportationService} from "../../services/school-transportation.service";
import {NgIf} from "@angular/common";
import {BreadcrumbComponent} from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-edit-school-transportation',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, NgxEditorModule, SchoolTransportationFormComponent, NgIf, BreadcrumbComponent],
  templateUrl: './edit-school-transportation.component.html',
  styleUrls: ['./edit-school-transportation.component.scss']
})
export class EditSchoolTransportationComponent implements OnInit {

    breadcrumbTitle = 'Editar Movilidad';
    breadcrumbPaths = ['Movilidad', 'Editar'];

    @ViewChild('formRef') formComponent: SchoolTransportationFormComponent;

    formData: SchoolTransportation = {
      id: '',
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
    }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.service.getById(id).subscribe((data: SchoolTransportation) => {
          this.formData = data;
        });
      }
    }

    onSubmit(): void {
      const id = this.formData.id;
      if (!id) return;

      const formData = this.formComponent.getFormData();
      const jsonData: any = {};

      formData.forEach((value, key) => {
        jsonData[key] = value;
      });

      this.service.update(id, jsonData).subscribe({
        next: () => {
          this.router.navigate(['/school-transportation']);
        },
        error: (err) => console.error('Error al actualizar:', err),
      });
    }

    onCancel(): void {
      this.router.navigate(['/school-transportation']).then(r => console.log(r));
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private service: SchoolTransportationService,
        private router: Router,
        private route: ActivatedRoute
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
