import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../../shared/services/customizer-settings/customizer-settings.service';
import { PlatformService } from '../../../../shared/services/platform/platform.service';

@Component({
  selector: 'app-completed-projects',
  standalone: true,
  imports: [MatCardModule],
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
