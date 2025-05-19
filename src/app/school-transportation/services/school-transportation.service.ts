import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SchoolTransportation} from "../model/school-transportation";

@Injectable({
  providedIn: 'root'
})
export class SchoolTransportationService {

  private apiUrl = 'https://fakeapi-gopw.onrender.com/school-transportation';

  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  getAll(): Observable<SchoolTransportation[]> {
    return this.http.get<SchoolTransportation[]>(this.apiUrl);
  }

  delete(id: string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getById(id: string): Observable<SchoolTransportation> {
  return this.http.get<SchoolTransportation>(`${this.apiUrl}/${id}`);
  }

  update(id: string, data: FormData): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, data);
  }

}
