import {Component, OnInit} from '@angular/core';
import {StudentsListComponent} from "../../../components/students-list/students-list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../../model/student";
import {StudentService} from "../../../services/student.service";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-primary-list',
  standalone: true,
  imports: [
    StudentsListComponent,
    BreadcrumbComponent
  ],
  templateUrl: './primary-list.component.html',
  styleUrl: './primary-list.component.scss'
})
export class PrimaryListComponent implements OnInit {

  breadcrumbTitle = 'Lista de Estudiantes Nivel Primario';
  breadcrumbPaths = ['Primaria', 'Lista de Estudiantes'];

  dataSource = new MatTableDataSource<Student>();
  addLink = '';
  level: string = '';
  gradeId: string = '';

  constructor(
    private route: ActivatedRoute,
    private service: StudentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.level = 'primary';

    this.gradeId = this.route.snapshot.paramMap.get('grade') || '';
    this.addLink = `/students/${this.level}/${this.gradeId}/create`;

    this.service.getAll().subscribe((data: Student[]) => {
      const filtered = data.filter(s =>
        s.level.toLowerCase() === 'primaria' && s.grade === +this.gradeId
      );
      this.dataSource.data = filtered;
    });
  }

  editStudent(student: Student): void {
    this.router.navigate([`/students/${this.level}/${this.gradeId}/edit`, student.id]);
  }

  deleteStudent(student: Student): void {
    this.service.delete(student.id!).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(s => s.id !== student.id);
    });
  }
}

