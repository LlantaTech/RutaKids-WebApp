import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Editor, Toolbar} from "ngx-editor";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {SchoolTransportation} from "../../model /school-transportation";
import {FormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FileUploadControl, FileUploadModule} from "@iplab/ngx-file-upload";

@Component({
  selector: 'app-school-transportation-form',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    FileUploadModule
  ],
  templateUrl: './school-transportation-form.component.html',
  styleUrl: './school-transportation-form.component.scss'
})
export class SchoolTransportationFormComponent {

  driverControl = new FileUploadControl();
  vehicleControl = new FileUploadControl();

  @Input() schoolTransportation: SchoolTransportation = {
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

  @Output() formSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  getDriverFile(): File | null {
    const items = this.driverControl.value as File[];
    return items && items.length > 0 ? items[0] : null;
  }

  getVehicleFile(): File | null {
    const items = this.vehicleControl.value as File[];
    return items && items.length > 0 ? items[0] : null;
  }

  editor: Editor = new Editor();

  multiple: boolean = false;

  onSubmit() {
    const formData = new FormData();

    Object.entries(this.schoolTransportation).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const driverFile = this.getDriverFile();
    if (driverFile) formData.append('driverPhoto', driverFile);

    const vehicleFile = this.getVehicleFile();
    if (vehicleFile) formData.append('vehiclePhoto', vehicleFile);

    this.formSubmit.emit(formData);
  }

  onCancel() {
    this.cancel.emit();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit(): void {
    this.editor = new Editor();
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
