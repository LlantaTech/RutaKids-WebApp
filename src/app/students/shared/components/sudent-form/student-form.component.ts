import {Component, Input, Output} from '@angular/core';
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import { EventEmitter } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {FileUploadComponent, FileUploadControl} from "@iplab/ngx-file-upload";
import {NgForOf, NgIf} from "@angular/common";
import {Student} from "../../../model/student";
import {MapSelectorComponent} from "../../../../shared/components/map-selector/map-selector.component";
import {DistrictFieldComponent} from "./district-field/district-field.component";

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatButton,
    MatOption,
    MatSelect,
    FileUploadComponent,
    NgForOf,
    NgIf,
    MatLabel,
    MatCardTitle,
    MapSelectorComponent,
    DistrictFieldComponent
  ],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
    showSecondParent: boolean = false;
    studentControl = new FileUploadControl();

    @Input() student!: Student;
    @Input() grade!: number;
    @Input() level!: string;

    @Output() submitClicked = new EventEmitter<void>();
    @Output() cancelClicked = new EventEmitter<void>();

    getFormData(): FormData {
      const formData = new FormData();

      for (const [key, value] of Object.entries(this.student)) {
        if (key === 'parents') continue; // evitamos por ahora los parents
        if (typeof value === 'string' || typeof value === 'boolean') {
          formData.append(key, value.toString());
        }
      }

      formData.append('parents', JSON.stringify(this.student.parents));

      const photoFile = this.getPhotoFile();
      if (photoFile) {
        formData.append('studentPhoto', photoFile);
      }

      return formData;
    }


    private getPhotoFile(): File | null {
        const items = this.studentControl.value as File[];
        return items?.[0] ?? null;
    }

    multiple: boolean = false;

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
