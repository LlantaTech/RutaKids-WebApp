import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../model/student";
import {API_URL} from "../../../core/tokens/api-url.token";

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }

  getByLevelAndGrade(level: string, grade: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/students?level=${level}&grade=${grade}`);
  }

  getById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/students/${id}`);
  }

  create(student: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/students`, student);
  }

  update(id: string, student: Student): Observable<any> {
    return this.http.put(`${this.apiUrl}/students/${id}`, student);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/students/${id}`);
  }
}

