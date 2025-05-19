import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomizerSettingsService {
  private isBrowser: boolean;

  private readonly keys = {
    dark: 'isDarkTheme',
    sidebarDark: 'isSidebarDarkTheme',
    rightSidebar: 'isRightSidebarTheme',
    hideSidebar: 'isHideSidebarTheme',
    headerDark: 'isHeaderDarkTheme',
    cardBorder: 'isCardBorderTheme',
    cardRadius: 'isCardBorderRadiusTheme',
    rtl: 'isRTLEnabledTheme'
  };

  private settings = {
    isDarkTheme: false,
    isSidebarDarkTheme: false,
    isRightSidebarTheme: false,
    isHideSidebarTheme: false,
    isHeaderDarkTheme: false,
    isCardBorderTheme: false,
    isCardBorderRadiusTheme: false,
    isRTLEnabledTheme: false
  };

  private isToggled = new BehaviorSubject<boolean>(false);
  get isToggled$() {
    return this.isToggled.asObservable();
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      setTimeout(() => this.loadSettings(), 0);
    }
  }

  private loadSettings() {
    for (const [key, value] of Object.entries(this.keys)) {
      this.settings[key as keyof typeof this.settings] = this.getBool(value);
    }
  }

  private getBool(key: string): boolean {
    try {
      return this.isBrowser ? JSON.parse(localStorage.getItem(key) || 'false') : false;
    } catch {
      return false;
    }
  }

  private setBool(key: string, value: boolean): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  // Métodos públicos de acceso seguro
  isDark() { return this.settings.isDarkTheme; }
  toggleTheme() {
    this.settings.isDarkTheme = !this.settings.isDarkTheme;
    this.setBool(this.keys.dark, this.settings.isDarkTheme);
  }

  isSidebarDark() { return this.settings.isSidebarDarkTheme; }
  toggleSidebarTheme() {
    this.settings.isSidebarDarkTheme = !this.settings.isSidebarDarkTheme;
    this.setBool(this.keys.sidebarDark, this.settings.isSidebarDarkTheme);
  }

  isRightSidebar() { return this.settings.isRightSidebarTheme; }
  toggleRightSidebarTheme() {
    this.settings.isRightSidebarTheme = !this.settings.isRightSidebarTheme;
    this.setBool(this.keys.rightSidebar, this.settings.isRightSidebarTheme);
  }

  isHideSidebar() { return this.settings.isHideSidebarTheme; }
  toggleHideSidebarTheme() {
    this.settings.isHideSidebarTheme = !this.settings.isHideSidebarTheme;
    this.setBool(this.keys.hideSidebar, this.settings.isHideSidebarTheme);
  }

  isHeaderDark() { return this.settings.isHeaderDarkTheme; }
  toggleHeaderTheme() {
    this.settings.isHeaderDarkTheme = !this.settings.isHeaderDarkTheme;
    this.setBool(this.keys.headerDark, this.settings.isHeaderDarkTheme);
  }

  isCardBorder() { return this.settings.isCardBorderTheme; }
  toggleCardBorderTheme() {
    this.settings.isCardBorderTheme = !this.settings.isCardBorderTheme;
    this.setBool(this.keys.cardBorder, this.settings.isCardBorderTheme);
  }

  isCardBorderRadius() { return this.settings.isCardBorderRadiusTheme; }
  toggleCardBorderRadiusTheme() {
    this.settings.isCardBorderRadiusTheme = !this.settings.isCardBorderRadiusTheme;
    this.setBool(this.keys.cardRadius, this.settings.isCardBorderRadiusTheme);
  }

  isRTLEnabled() { return this.settings.isRTLEnabledTheme; }
  toggleRTLEnabledTheme() {
    this.settings.isRTLEnabledTheme = !this.settings.isRTLEnabledTheme;
    this.setBool(this.keys.rtl, this.settings.isRTLEnabledTheme);
  }

  toggle() {
    this.isToggled.next(!this.isToggled.value);
  }
}
