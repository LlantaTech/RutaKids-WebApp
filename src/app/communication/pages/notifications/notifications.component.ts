import {Component, OnInit, ViewChild} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Notification} from "../model/notifications";
import {GlobalAlertService} from "../../../shared/services/global-alert/global-alert.service";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, MatTableModule, NgIf, MatCheckboxModule, MatTooltipModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {

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
    }, 15000); // ← cambia a 900000 para 15 minutos reales
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
    const types = ['Information', 'Alert', 'Announcement'] as const;
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

    // Mostrar alerta visual global
    const alertType = types[index] === 'Alert' ? 'danger' :
                      types[index] === 'Information' ? 'daxa' : 'success';

    this.globalAlertService.showAlert(alertType, newNotification.content);
  }

  updateTable() {
    this.dataSource.data = [...this.notifications];
  }
}
