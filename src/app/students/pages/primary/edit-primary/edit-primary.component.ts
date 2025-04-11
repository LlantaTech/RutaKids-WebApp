import { Component } from '@angular/core';
import {StudentFormComponent} from "../../../components/student-form/student-form.component";

@Component({
  selector: 'app-edit-primary',
  standalone: true,
  imports: [
    StudentFormComponent
  ],
  templateUrl: './edit-primary.component.html',
  styleUrl: './edit-primary.component.scss'
})
export class EditPrimaryComponent {

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
