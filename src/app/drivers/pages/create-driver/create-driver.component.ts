import {Component, Output} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {Router, RouterLink} from '@angular/router';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-create-driver',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, FileUploadModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './create-driver.component.html',
  styleUrl: './create-driver.component.scss'
})
export class CreateDriverComponent {

  public multiple: boolean = false;
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService,
    private router: Router
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  createDriver() {
    const newDriver = {
      memberImg: 'assets/images/users/default.jpg',
      memberName: 'Nuevo Conductor',
      designation: 'Conductor',
      joinedDate: new Date().toISOString().slice(0, 10),
      contactPhone: '+1 555-000-0000',
      location: 'Lima',
      socialsLink: []
    };

    // Obtener lista actual
    const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');

    // Agregar nuevo conductor
    drivers.push(newDriver);

    // Guardar nuevamente
    localStorage.setItem('drivers', JSON.stringify(drivers));

    // Redirigir a la vista de tarjetas
    this.router.navigate(['/drivers']);
  }

  cancel() {
    this.router.navigate(['/drivers']);
  }
}
