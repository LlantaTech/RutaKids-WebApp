import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsListComponent } from './notifications-list.component';
import { GlobalAlertService } from '../../../shared/services/global-alert/global-alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {provideRouter} from "@angular/router";

describe('NotificationsListComponent', () => {
  let component: NotificationsListComponent;
  let fixture: ComponentFixture<NotificationsListComponent>;
  let globalAlertService: GlobalAlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsListComponent, BrowserAnimationsModule],
      providers: [GlobalAlertService, provideRouter([])],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ignora elementos desconocidos como app-breadcrumb
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsListComponent);
    component = fixture.componentInstance;
    globalAlertService = TestBed.inject(GlobalAlertService);
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el título y ruta del breadcrumb configurados correctamente', () => {
    expect(component.breadcrumbTitle).toBe('Notificaciones');
    expect(component.breadcrumbPaths).toEqual(['Notificaciones']);
  });

  it('debería iniciar con notificaciones mock', () => {
    expect(component.notifications.length).toBeGreaterThan(0);
  });

  it('debería llamar al servicio GlobalAlertService al ejecutar showTestAlert()', () => {
    const spy = spyOn(globalAlertService, 'showAlert');
    component.showTestAlert();
    expect(spy).toHaveBeenCalled();
  });

  it('debería agregar una nueva notificación y actualizar la tabla', () => {
    const cantidadInicial = component.notifications.length;
    component.addRandomNotification();
    expect(component.notifications.length).toBeGreaterThan(cantidadInicial);
  });
});
