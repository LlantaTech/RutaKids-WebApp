import { Component } from '@angular/core';
import {CustomizerSettingsService} from "../../shared/services/customizer-settings/customizer-settings.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatAnchor} from "@angular/material/button";
import {BreadcrumbComponent} from "../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-settings',
  standalone: true,
    imports: [
        RouterLinkActive,
        MatCardContent,
        MatCard,
        RouterOutlet,
        RouterLink,
        MatAnchor,
        BreadcrumbComponent
    ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

    breadcrumbTitle = 'Settings';
    breadcrumbPaths = ['Settings'];

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
