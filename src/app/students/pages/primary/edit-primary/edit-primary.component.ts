import { Component } from '@angular/core';
import {StudentFormComponent} from "../../../components/student-form/student-form.component";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-edit-primary',
  standalone: true,
    imports: [
        StudentFormComponent,
        BreadcrumbComponent
    ],
  templateUrl: './edit-primary.component.html',
  styleUrl: './edit-primary.component.scss'
})
export class EditPrimaryComponent {

    breadcrumbTitle = 'Editar Alumno Nivel Primario';
    breadcrumbPaths = ['Primaria', 'Grado', 'Editar Alumno'];

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
