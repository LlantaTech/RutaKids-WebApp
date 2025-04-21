import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {Student} from "../../../../students/model/student";
import {SchoolTransportation} from "../../../../school-transportation/model/school-transportation";

@Component({
  selector: 'app-school-routes-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  templateUrl: './school-routes-table.component.html',
  styleUrl: './school-routes-table.component.scss'
})
export class SchoolRoutesTableComponent implements AfterViewInit, OnChanges{
  // Entradas desde el form padre
  @Input() studentData: Student[] = [];
  @Input() conductorData: SchoolTransportation[] = [];

  @Output() deleteSelectedStudents = new EventEmitter<Student[]>();
  @Output() deleteSelectedConductor = new EventEmitter<SchoolTransportation[]>();

  studentDataSource = new MatTableDataSource<Student>();
  conductorDataSource = new MatTableDataSource<SchoolTransportation>();

  selectionStudents = new SelectionModel<Student>(true, []);
  selectionConductor = new SelectionModel<SchoolTransportation>(true, []);

  conductorDisplayedColumns: string[] = ['select', 'fullName', 'dni', 'vehiclePlate'];
  studentDisplayedColumns: string[] = ['select', 'fullName', 'dni', 'level', 'grade'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(public themeService: CustomizerSettingsService) {}

  ngAfterViewInit() {
    this.studentDataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['studentData']) {
      this.studentDataSource.data = this.studentData;
    }
    if (changes['conductorData']) {
      this.conductorDataSource.data = this.conductorData;
    }

  }

  isAllConductorSelected() {
    return this.selectionConductor.selected.length === this.conductorDataSource.data.length;
  }

  toggleAllConductorRows() {
    this.isAllConductorSelected()
      ? this.selectionConductor.clear()
      : this.conductorDataSource.data.forEach(row => this.selectionConductor.select(row));
  }

  checkboxLabelConductor(row?: SchoolTransportation): string {
    return row
      ? `${this.selectionConductor.isSelected(row) ? 'deselect' : 'select'} conductor`
      : 'select conductor';
  }

  isAllStudentsSelected() {
    return this.selectionStudents.selected.length === this.studentDataSource.data.length;
  }

  toggleAllStudentRows() {
    this.isAllStudentsSelected()
      ? this.selectionStudents.clear()
      : this.studentDataSource.data.forEach(row => this.selectionStudents.select(row));
  }

  checkboxLabelStudent(row?: Student): string {
    return row
      ? `${this.selectionStudents.isSelected(row) ? 'deselect' : 'select'} student`
      : 'select all';
  }

  deleteSelected() {
    const remainingStudents = this.studentDataSource.data.filter(
      s => !this.selectionStudents.isSelected(s)
    );
    const remainingConductor = this.conductorDataSource.data.filter(
      c => !this.selectionConductor.isSelected(c)
    );

    this.deleteSelectedStudents.emit(this.selectionStudents.selected);
    this.deleteSelectedConductor.emit(this.selectionConductor.selected);

    this.selectionStudents.clear();
    this.selectionConductor.clear();

    this.studentDataSource.data = remainingStudents;
    this.conductorDataSource.data = remainingConductor;
  }

  isToggled = false;
  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }
}

