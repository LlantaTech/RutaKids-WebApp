import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSelect} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {combineLatest, map, Observable, startWith} from "rxjs";
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {MatButton} from "@angular/material/button";
import {Student} from "../../../../students/model/student";

@Component({
  selector: 'app-school-routes-selector-students',
  standalone: true,
  imports: [
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatButton,
    NgForOf
  ],
  templateUrl: './school-routes-selector-students.component.html',
  styleUrl: './school-routes-selector-students.component.scss'
})
export class SchoolRoutesSelectorStudentsComponent implements OnInit{

  @Input() students: Student[] = [];
  @Output() selectedStudent = new EventEmitter<Student>();

  levelControl = new FormControl<string | null>(null);
  gradeControl = new FormControl<string | null>(null);
  studentControl = new FormControl<Student | null>(null);

  filteredStudents!: Observable<Student[]>;

  levels: string[] = ['Primaria', 'Secundaria'];
  grades: string[] = ['1°', '2°', '3°', '4°', '5°', '6°'];

  ngOnInit(): void {
    // 1. Resetear studentControl cuando cambien nivel o grado
    combineLatest([
      this.levelControl.valueChanges.pipe(startWith(null)),
      this.gradeControl.valueChanges.pipe(startWith(null))
    ]).subscribe(() => {
      this.studentControl.reset();
    });

    // 2. Autocomplete que se actualiza siempre con nivel, grado y texto
    this.filteredStudents = combineLatest([
      this.levelControl.valueChanges.pipe(startWith(null)),
      this.gradeControl.valueChanges.pipe(startWith(null)),
      this.studentControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([level, grade, input]) => {
        const filtered = this.students.filter(s =>
          s.level === level && `${s.grade}°` === grade
        );

        const filterValue = typeof input === 'string' ? input.toLowerCase() : '';
        return filtered.filter(s =>
          `${s.firstName} ${s.paternalLastName}`.toLowerCase().includes(filterValue) ||
          s.dni.includes(filterValue)
        );
      })
    );
  }


  private filteredByLevelAndGrade(): Student[] {
    const level = this.levelControl.value;
    const grade = this.gradeControl.value;
    return this.students.filter(s => s.level === level && `${s.grade}°` === grade);
  }

  private _filter(value: string): Student[] {
    const filterValue = value.toLowerCase();
    return this.filteredByLevelAndGrade().filter(student =>
      `${student.firstName} ${student.paternalLastName}`.toLowerCase().includes(filterValue) ||
      student.dni.includes(filterValue)
    );
  }

  displayFn(student: Student): string {
    return student ? `${student.firstName} ${student.paternalLastName} ${student.maternalLastName} ${student.paternalLastName}` : '';
  }

  onAddStudent(): void {
    const selected = this.studentControl.value;
    if (selected) {
      this.selectedStudent.emit(selected);
      this.studentControl.reset();
    }
  }

  // isToggled visual
  isToggled = false;
  constructor(public themeService: CustomizerSettingsService) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  toggleRTLEnabledTheme(): void {
    this.themeService.toggleRTLEnabledTheme();
  }

}
