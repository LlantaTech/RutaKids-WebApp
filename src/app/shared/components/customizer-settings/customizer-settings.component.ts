import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CustomizerSettingsService } from '../../services/customizer-settings/customizer-settings.service';
import {PlatformService} from "../../services/platform/platform.service";

@Component({
  selector: 'app-customizer-settings',
  standalone: true,
  imports: [NgClass, MatDividerModule, MatIconModule, MatButtonModule, NgScrollbarModule, NgIf],
  templateUrl: './customizer-settings.component.html',
  styleUrls: ['./customizer-settings.component.scss']
})
export class CustomizerSettingsComponent {
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService,
    public platform: PlatformService
  ) {
    if (this.platform.isBrowser) {
      this.themeService.isToggled$.subscribe(isToggled => {
        this.isToggled = isToggled;
      });
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleSidebarTheme() {
    this.themeService.toggleSidebarTheme();
  }

  toggleRightSidebarTheme() {
    this.themeService.toggleRightSidebarTheme();
  }

  toggleHideSidebarTheme() {
    this.themeService.toggleHideSidebarTheme();
  }

  toggleHeaderTheme() {
    this.themeService.toggleHeaderTheme();
  }

  toggleCardBorderTheme() {
    this.themeService.toggleCardBorderTheme();
  }

  toggleCardBorderRadiusTheme() {
    this.themeService.toggleCardBorderRadiusTheme();
  }

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  toggle() {
    this.themeService.toggle();
  }
}
