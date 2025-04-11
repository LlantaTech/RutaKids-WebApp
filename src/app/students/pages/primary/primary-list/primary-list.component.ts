import {Component, OnInit} from '@angular/core';
import {StudentsListComponent} from "../../../components/students-list/students-list.component";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-primary-list',
  standalone: true,
  imports: [
    StudentsListComponent
  ],
  templateUrl: './primary-list.component.html',
  styleUrl: './primary-list.component.scss'
})
export class PrimaryListComponent implements OnInit {

  grade: string = '';
  students: any[] = [];
  createLink: string = '';
  editLinkBase: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const level = 'primary'; // fijo para primaria
    const grade = this.route.snapshot.paramMap.get('grade') || '';

    this.createLink = `/students/primary/${this.grade}/create`;
    this.editLinkBase = `/students/primary/${this.grade}/edit/`;

    this.loadStudents(level, grade);
  }

  loadStudents(level: string, grade: string) {
    // Temporal: data mock
    const mockData = [
      { id: '1', name: 'Ana Díaz', email: 'ana@example.com', grade: '1', level: 'primary', img: 'assets/images/users/user-1.png', status: 'active' },
      { id: '2', name: 'Carlos Pérez', email: 'carlos@example.com', grade: '2', level: 'primary', img: 'assets/images/users/user-2.png', status: 'inactive' },
      { id: '3', name: 'Lucía Ríos', email: 'lucia@example.com', grade: '1', level: 'secondary', img: 'assets/images/users/user-3.png', status: 'active' },
      { id: '4', name: 'Mateo Vilchez', email: 'lucia@example.com', grade: '1', level: 'primary', img: 'assets/images/users/user-3.png', status: 'active' }

    ];

    this.students = mockData.filter(
      student => student.level === level && student.grade === grade
    );
  }

}

