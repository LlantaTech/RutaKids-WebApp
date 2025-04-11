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

    selectedStudent = {
        id: '123',
        fullName: 'Mateo Vilchez',
        email: 'mateo@example.com',
        grade: 'third',
        status: 'active',
        description: 'Sample description'
    };

    handleUpdate(student: any) {
        // Aquí haces el PUT al backend en el futuro
        console.log('Updating student:', student);
    }

    handleCancel() {
        // Rediriges o limpias
    }

}
