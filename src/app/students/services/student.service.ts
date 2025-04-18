import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  // Get all students
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // Get students by level and grade
  getByLevelAndGrade(level: string, grade: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}?level=${level}&grade=${grade}`);
  }

  // Get student by ID
  getById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // Create student
  create(student: FormData): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }

  // Update student
  update(id: string, student: Student): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }

  // Delete student
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
