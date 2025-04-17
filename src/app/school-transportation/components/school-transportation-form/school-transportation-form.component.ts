import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Editor} from "ngx-editor";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {FormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FileUploadControl, FileUploadModule} from "@iplab/ngx-file-upload";
import {SchoolTransportation} from "../../model/school-transportation";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-school-transportation-form',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    FileUploadModule,
    MatButton
  ],
  templateUrl: './school-transportation-form.component.html',
  styleUrl: './school-transportation-form.component.scss'
})
export class SchoolTransportationFormComponent {

  driverControl = new FileUploadControl();
  vehicleControl = new FileUploadControl();

  @Input() schoolTransportation!: SchoolTransportation;
  @Output() submitClicked = new EventEmitter<void>();
  @Output() cancelClicked = new EventEmitter<void>();

  multiple: boolean = false;

  getFormData(): FormData {
    const formData = new FormData();

    Object.entries(this.schoolTransportation).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const driverFile = this.getDriverFile();
    if (driverFile) formData.append('driverPhoto', driverFile);

    const vehicleFile = this.getVehicleFile();
    if (vehicleFile) formData.append('vehiclePhoto', vehicleFile);

    return formData;
  }

  private getDriverFile(): File | null {
    const items = this.driverControl.value as File[];
    return items?.[0] ?? null;
  }

  private getVehicleFile(): File | null {
    const items = this.vehicleControl.value as File[];
    return items?.[0] ?? null;
  }

  // isToggled
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService
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
