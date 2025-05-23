import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import {
  CustomizerSettingsService
} from "../../../../../shared/services/customizer-settings/customizer-settings.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
      // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}
