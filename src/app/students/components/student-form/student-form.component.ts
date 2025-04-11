import {Component, Input, Output} from '@angular/core';
import {Editor, NgxEditorModule, Toolbar} from "ngx-editor";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import { EventEmitter } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FileUploadComponent} from "@iplab/ngx-file-upload";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    FileUploadComponent,
    NgxEditorModule,
    MatOption,
    MatSelect,
    RouterLink,
    MatLabel
  ],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {

    @Input() formTitle: string = 'Create Student';
    @Input() submitLabel: string = 'Save';
    @Input() student = {
      id: '',
      fullName: '',
      email: '',
      grade: '',
      status: '',
      description: ''
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
