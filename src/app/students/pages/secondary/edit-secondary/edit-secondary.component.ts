import { Component } from '@angular/core';
import {StudentFormComponent} from "../../../components/student-form/student-form.component";

@Component({
  selector: 'app-edit-primary',
  standalone: true,
  imports: [
    StudentFormComponent
  ],
  templateUrl: './edit-secondary.component.html',
  styleUrl: './edit-secondary.component.scss'
})
export class EditSecondaryComponent {
}
