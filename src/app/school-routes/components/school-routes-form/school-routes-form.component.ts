import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {SchoolRoutesSelectorSchoolTransportationComponent} from "./school-routes-selector-school-transportation/school-routes-selector-school-transportation.component";
import {SchoolRoutesTableComponent} from "./school-routes-table/school-routes-table.component";
import {
  SchoolRoutesSelectorStudentsComponent
} from "./school-routes-selector-students/school-routes-selector-students.component";
import {MatButton} from "@angular/material/button";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {SchoolTransportation} from "../../../school-transportation/model/school-transportation";
import {Student} from "../../../students/model/student";

@Component({
  selector: 'app-school-routes-form',
  standalone: true,
  imports: [
    MatCardContent,
    ReactiveFormsModule,
    SchoolRoutesSelectorSchoolTransportationComponent,
    SchoolRoutesTableComponent,
    SchoolRoutesSelectorStudentsComponent,
    MatButton,
    MatCard
  ],
  templateUrl: './school-routes-form.component.html',
  styleUrl: './school-routes-form.component.scss'
})

export class SchoolRoutesFormComponent {
  @Input() studentOptions: Student[] = [];
  @Input() transportationOptions: SchoolTransportation[] = [];
  @Input() routeToEdit: any = null; // solo si estás en modo edición
  @Input() selectedStudents: Student[] = [];
  @Input() selectedTransportation: SchoolTransportation | null = null;

  @Output() addStudent = new EventEmitter<Student>();
  @Output() addTransportation = new EventEmitter<SchoolTransportation>();
  @Output() deleteSelectedStudents = new EventEmitter<Student[]>();
  @Output() deleteSelectedConductor = new EventEmitter<SchoolTransportation[]>();
  @Output() submitForm = new EventEmitter<any>();
  @Output() cancelForm = new EventEmitter<void>();

  onAddTransportation(transport: SchoolTransportation) {
    this.selectedTransportation = transport;
  }

  onAddStudent(student: Student) {
    if (!this.selectedStudents.find(s => s.id === student.id)) {
      this.selectedStudents = [...this.selectedStudents, student];
    }
  }

  onDeleteStudents(toDelete: Student[]) {
    this.selectedStudents = this.selectedStudents.filter(
      s => !toDelete.find(d => d.id === s.id)
    );
  }

  onDeleteTransportation() {
    this.selectedTransportation = null;
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
