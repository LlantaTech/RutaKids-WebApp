import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../shared/services/customizer-settings/customizer-settings.service';
import { PlatformService } from '../../../../shared/services/platform/platform.service';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-completed-projects',
  standalone: true,
  imports: [MatCardModule, RouterLink, NgOptimizedImage],
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.scss']
})
export class CompletedProjectsComponent {

  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService,
    public platform: PlatformService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
