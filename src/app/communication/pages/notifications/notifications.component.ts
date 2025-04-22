import {Component, OnInit, ViewChild} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Notification} from "../../model/notifications";
import {GlobalAlertService} from "../../../shared/services/global-alert/global-alert.service";
import {BreadcrumbComponent} from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, MatTableModule, NgIf, MatCheckboxModule, MatTooltipModule, BreadcrumbComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {

  breadcrumbTitle = 'Notificaciones';
  breadcrumbPaths = ['Notificaciones'];

  constructor(private globalAlertService: GlobalAlertService) {}

  showTestAlert() {
    this.globalAlertService.showAlert('daxa', 'Este es un mensaje de prueba.');
    this.globalAlertService.showAlert('danger', '¡Ha ocurrido un error!');
    this.globalAlertService.showAlert('success', 'Guardado exitosamente');
    this.globalAlertService.showAlert('primary', 'Tienes un nuevo correo');
  }

  displayedColumns: string[] = ['id', 'timestamp', 'type', 'content', 'status'];
  dataSource = new MatTableDataSource<Notification>([]);
  notifications: Notification[] = [];

  ngOnInit(): void {
    this.notifications = this.getInitialMockData();
    this.updateTable();

    setInterval(() => {
      this.addRandomNotification();
    }, 15000); // Cambiar a 900000 para 15 minutos reales
  }

  getInitialMockData(): Notification[] {
    return [
      {
        id: '#1001',
        timestamp: new Date().toLocaleString(),
        type: 'Information',
        content: 'Sistema operativo actualizado.',
        status: 'Read'
      },
      {
        id: '#1002',
        timestamp: new Date().toLocaleString(),
        type: 'Alert',
        content: 'Servidor en mantenimiento esta noche.',
        status: 'Unread'
      },
      {
        id: '#1003',
        timestamp: new Date().toLocaleString(),
        type: 'Announcement',
        content: 'Bienvenido el nuevo jefe de soporte.',
        status: 'Read'
      }
    ];
  }

  addRandomNotification() {
    const types: Notification['type'][] = ['Information', 'Alert', 'Announcement'];
    const contents = [
      'Nuevo parche disponible.',
      'Reunión urgente a las 4pm.',
      'Cambios en la política de seguridad.'
    ];

    const index = Math.floor(Math.random() * types.length);
    const newNotification: Notification = {
      id: `#${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleString(),
      type: types[index],
      content: contents[index],
      status: 'Unread'
    };

    this.notifications.unshift(newNotification);
    this.updateTable();

    const alertType = this.mapNotificationTypeToAlertType(newNotification.type);
    this.globalAlertService.showAlert(alertType, newNotification.content);
  }

  mapNotificationTypeToAlertType(type: Notification['type']): 'daxa' | 'success' | 'danger' | 'primary' {
    switch (type) {
      case 'Information': return 'daxa';
      case 'Announcement': return 'success';
      case 'Alert': return 'danger';
      case 'Mail': return 'primary';
      default: return 'daxa';
    }
  }

  updateTable() {
    this.dataSource.data = [...this.notifications];
  }
}
