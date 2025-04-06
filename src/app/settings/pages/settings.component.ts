import { Component } from '@angular/core';
import {CustomizerSettingsService} from "../../shared/services/customizer-settings/customizer-settings.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    RouterLinkActive,
    MatCardContent,
    MatCard,
    RouterOutlet,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
}
