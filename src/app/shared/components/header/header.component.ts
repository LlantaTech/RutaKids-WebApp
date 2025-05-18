import {isPlatformBrowser, NgClass, NgOptimizedImage} from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import { ToggleService } from '../sidebar/toggle.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {CustomizerSettingsService} from "../../services/customizer-settings/customizer-settings.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, MatMenuModule, MatButtonModule, RouterLink, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSidebarToggled = false;
  isToggled = false;
  isSticky = false;
  private readonly isBrowser: boolean;

  constructor(
    private toggleService: ToggleService,
    public themeService: CustomizerSettingsService,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
      this.isSidebarToggled = isSidebarToggled;
    });

    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  // Burger Menu Toggle
  toggle() {
    this.toggleService.toggle();
  }

  // Sticky header: solo si estamos en navegador
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (!this.isBrowser) return;

    const scrollPosition = window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0;

    this.isSticky = scrollPosition >= 50;
  }

  // Theme Toggles
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

  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

  goBack() {
    this.location.back();
  }
}
