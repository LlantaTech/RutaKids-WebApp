import { Component } from '@angular/core';
import {FileUploadComponent} from "@iplab/ngx-file-upload";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {Editor, NgxEditorModule, Toolbar} from "ngx-editor";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-edit-child',
  standalone: true,
    imports: [
        FileUploadComponent,
        FormsModule,
        MatButton,
        MatCard,
        MatCardContent,
        MatFormField,
        MatInput,
        MatLabel,
        MatOption,
        MatSelect,
        NgxEditorModule,
        RouterLink
    ],
  templateUrl: './edit-child.component.html',
  styleUrl: './edit-child.component.scss'
})
export class EditChildComponent {

    // Text Editor
    editor: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

    ngOnInit(): void {
        this.editor = new Editor();
    }

    // make sure to destory the editor
    ngOnDestroy(): void {
        this.editor.destroy();
    }

    // File Uploader
    public multiple: boolean = false;

    // Select Value
    statusSelected = 'option1';
    roleSelected = 'option1';

}
