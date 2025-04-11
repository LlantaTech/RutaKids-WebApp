import { Component } from '@angular/core';
import {StudentFormComponent} from "../../../components/student-form/student-form.component";

@Component({
  selector: 'app-create-primary',
  standalone: true,
  imports: [
    StudentFormComponent
  ],
  templateUrl: './create-secondary.component.html',
  styleUrl: './create-secondary.component.scss'
})
export class CreateSecondaryComponent {
    handleCreate(student: any) {
      console.log('Creating student:', student);
    }

    handleCancel() {
    }

}
