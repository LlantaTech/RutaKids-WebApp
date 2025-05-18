import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../shared/services/customizer-settings/customizer-settings.service';
import {PlatformService} from "../../../../shared/services/platform/platform.service";

@Component({
  selector: 'app-total-members',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './total-members.component.html',
  styleUrls: ['./total-members.component.scss']
})
export class TotalMembersComponent {

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
