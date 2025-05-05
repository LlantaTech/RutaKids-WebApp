import { Component } from '@angular/core';
import {SchoolRoutesFormComponent} from "../../components/school-routes-form/school-routes-form.component";
import {Student} from "../../../students/model/student";
import {SchoolTransportation} from "../../../school-transportation/model/school-transportation";
import {StudentService} from "../../../students/shared/services/student.service";
import {SchoolTransportationService} from "../../../school-transportation/services/school-transportation.service";

@Component({
  selector: 'app-create-school-routes',
  standalone: true,
  imports: [
    SchoolRoutesFormComponent
  ],
  templateUrl: './create-school-routes.component.html',
  styleUrls: ['./create-school-routes.component.scss']
})
export class CreateSchoolRoutesComponent {
 students: Student[] = [];
  transportations: SchoolTransportation[] = [];

  selectedStudents: Student[] = [];
  selectedTransportation: SchoolTransportation | null = null;

  constructor(
    private studentService: StudentService,
    private transportService: SchoolTransportationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.studentService.getAll().subscribe(data => this.students = data);
    this.transportService.getAll().subscribe(data => this.transportations = data);
  }

  onAddStudent(student: Student) {
    if (!this.selectedStudents.find(s => s.id === student.id)) {
      this.selectedStudents.push(student);
    }
  }

  onAddTransportation(transport: SchoolTransportation) {
    this.selectedTransportation = transport;
  }

  onDeleteStudents(toDelete: Student[]) {
    this.selectedStudents = this.selectedStudents.filter(
      s => !toDelete.find(d => d.id === s.id)
    );
  }

  onDeleteTransportation() {
    this.selectedTransportation = null;
  }

  onCreateRoute() {
    console.log('Crear ruta:', {
      conductor: this.selectedTransportation,
      estudiantes: this.selectedStudents
    });
  }

}
