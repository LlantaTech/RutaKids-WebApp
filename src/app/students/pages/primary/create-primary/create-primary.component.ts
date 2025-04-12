import { Component } from '@angular/core';
import {StudentFormComponent} from "../../../components/student-form/student-form.component";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-create-primary',
  standalone: true,
  imports: [
    StudentFormComponent,
    BreadcrumbComponent
  ],
  templateUrl: './create-primary.component.html',
  styleUrl: './create-primary.component.scss'
})
export class CreatePrimaryComponent {

    breadcrumbTitle = 'Crear Estudiante Nivel Primario';
    breadcrumbPaths = ['Primaria', 'Grado', 'Crear Estudiante'];


    handleCreate(student: any) {
      console.log('Creating student:', student);
    }

    handleCancel() {
    }
}
