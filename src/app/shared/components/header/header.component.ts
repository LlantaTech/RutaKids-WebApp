import { NgClass, isPlatformBrowser } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ToggleService } from '../sidebar/toggle.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from "../../services/customizer-settings/customizer-settings.service";
import { Location } from "@angular/common";
import { WindowRef } from "../../../core/services/window-ref.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, MatMenuModule, MatButtonModule, RouterLink ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isSidebarToggled = false;
  isToggled = false;
  isSticky: boolean = false;
  private win: Window | undefined;
  private isBrowser = false;

  constructor(
    private toggleService: ToggleService,
    public themeService: CustomizerSettingsService,
    private location: Location,
    private windowRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // 👈 AQUÍ DEBE IR

    this.toggleService.isSidebarToggled$.subscribe(value => this.isSidebarToggled = value);
    this.themeService.isToggled$.subscribe(value => this.isToggled = value);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.win = this.windowRef.nativeWindow;
      this.win?.addEventListener('scroll', this.checkScroll);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.win?.removeEventListener('scroll', this.checkScroll);
    }
  }

  checkScroll = () => {
    if (!this.isBrowser) return;

    const scrollPosition =
      this.win?.scrollY ||
      (typeof document !== 'undefined' && document.documentElement?.scrollTop) ||
      (typeof document !== 'undefined' && document.body?.scrollTop) ||
      0;

    this.isSticky = scrollPosition >= 50;
  };

  toggle() { this.toggleService.toggle(); }
  toggleTheme() { this.themeService.toggleTheme(); }
  toggleSidebarTheme() { this.themeService.toggleSidebarTheme(); }
  toggleRightSidebarTheme() { this.themeService.toggleRightSidebarTheme(); }
  toggleHideSidebarTheme() { this.themeService.toggleHideSidebarTheme(); }
  toggleHeaderTheme() { this.themeService.toggleHeaderTheme(); }
  toggleCardBorderTheme() { this.themeService.toggleCardBorderTheme(); }
  toggleRTLEnabledTheme() { this.themeService.toggleRTLEnabledTheme(); }
  goBack() { this.location.back(); }
}
