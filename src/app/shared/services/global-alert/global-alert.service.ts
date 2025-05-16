import { Injectable } from '@angular/core';
import {GlobalAlert} from "../../model/global-alert";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalAlertService {
  private alertSubject = new Subject<Omit<GlobalAlert, 'id'>>();
  alert$ = this.alertSubject.asObservable();

  showAlert(type: GlobalAlert['type'], message: string) {
    this.alertSubject.next({ type, message });
  }
}
