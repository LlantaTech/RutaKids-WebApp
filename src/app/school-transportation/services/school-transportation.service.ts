import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchoolTransportation } from '../model/school-transportation';
import { API_URL } from '../../core/tokens/api-url.token';

@Injectable({
  providedIn: 'root'
})
export class SchoolTransportationService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {}

  create(data: any) {
    return this.http.post(`${this.apiUrl}/school-transportation`, data);
  }

  getAll(): Observable<SchoolTransportation[]> {
    return this.http.get<SchoolTransportation[]>(`${this.apiUrl}/school-transportation`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/school-transportation/${id}`);
  }

  getById(id: string): Observable<SchoolTransportation> {
    return this.http.get<SchoolTransportation>(`${this.apiUrl}/school-transportation/${id}`);
  }

  update(id: string, data: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/school-transportation/${id}`, data);
  }
}
