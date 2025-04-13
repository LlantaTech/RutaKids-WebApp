import {Component, Input, Output} from '@angular/core';
import {Editor, Toolbar} from "ngx-editor";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import { EventEmitter } from '@angular/core';

import {Student} from "../../model/student";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {DistrictFieldComponent} from "./district-field/district-field.component";
import {MatButton} from "@angular/material/button";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {FileUploadComponent} from "@iplab/ngx-file-upload";
import {NgForOf, NgIf} from "@angular/common";

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
    DistrictFieldComponent,
    MatButton,
    MatOption,
    MatSelect,
    FileUploadComponent,
    NgForOf,
    NgIf,
    MatLabel,
    MatCardTitle
  ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
    showSecondParent: boolean = false;

    @Input() formTitle: string = 'Create Student';
    @Input() submitLabel: string = 'Save';
    @Input() student: Student = {
      id: '',
      dni: '',
      firstName: '',
      paternalLastName: '',
      maternalLastName: '',
      level: '',
      grade: '',
      email: '',
      phone: '',
      address: '',
      district: '',
      hasMobility: false,
      parents: [
        {
          id: '',
          type: '',
          dni: '',
          firstName: '',
          paternalLastName: '',
          maternalLastName: '',
          email: '',
          phone: '',
          address: '',
          district: ''
        }
      ]
    };


    @Output() formSubmit = new EventEmitter<any>();
    @Output() cancel = new EventEmitter<void>();

    editor: Editor = new Editor();
    toolbar: Toolbar = [
      ['bold', 'italic'],
      ['underline', 'strike'],
      ['code', 'blockquote'],
      ['ordered_list', 'bullet_list'],
      ['link', 'image'],
      ['text_color', 'background_color'],
      ['align_left', 'align_center', 'align_right']
    ];

    multiple: boolean = false;

    onSubmit() {
      this.formSubmit.emit(this.student);
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
