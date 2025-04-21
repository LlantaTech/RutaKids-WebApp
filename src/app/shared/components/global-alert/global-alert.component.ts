import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {GlobalAlert} from "../../model/global-alert";
import {GlobalAlertService} from "../../services/global-alert/global-alert.service";
import {CustomizerSettingsService} from "../../services/customizer-settings/customizer-settings.service";

@Component({
  selector: 'app-global-alert',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './global-alert.component.html',
  styleUrl: './global-alert.component.scss'
})
export class GlobalAlertComponent implements OnInit {
  alerts: GlobalAlert[] = [];
  private nextId = 0;

  ngOnInit(): void {
    this.alertService.alert$.subscribe(({ type, message }) => {
      this.showAlert(type, message);
    });
  }

  showAlert(type: GlobalAlert['type'], message: string) {
    const id = this.nextId++;
    this.alerts.push({ id, type, message });
    setTimeout(() => this.removeAlert(id), 5000);
  }

  removeAlert(id: number) {
    this.alerts = this.alerts.filter(alert => alert.id !== id);
  }

  getAlertClass(type: GlobalAlert['type']): string {
    return `alert alert-bg-${type}`;
  }

  isToggled = false;

  constructor(
        public themeService: CustomizerSettingsService,
        private alertService: GlobalAlertService
  ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
  }

  // Dark Mode
  toggleTheme() {
        this.themeService.toggleTheme();
  }
}
