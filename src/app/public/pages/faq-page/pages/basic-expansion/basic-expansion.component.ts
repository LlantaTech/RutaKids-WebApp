import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {
  CustomizerSettingsService
} from "../../../../../shared/services/customizer-settings/customizer-settings.service";
import {MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-basic-expansion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle],
  templateUrl: './basic-expansion.component.html',
  styleUrls: ['./basic-expansion.component.scss']
})
export class BasicExpansionComponent {

    // Expansion Panel
    panelOpenState = false;

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
