import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomizerSettingsService {
  private readonly isBrowser: boolean;

  // Estado local de cada configuración
  private isDarkTheme = false;
  private isSidebarDarkTheme = false;
  private isRightSidebarTheme = false;
  private isHideSidebarTheme = false;
  private isHeaderDarkTheme = false;
  private isCardBorderTheme = false;
  private isCardBorderRadiusTheme = false;
  private isRTLEnabledTheme = false;

  // Claves centralizadas para localStorage
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

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.isDarkTheme = this.getBool(this.keys.dark);
      this.isSidebarDarkTheme = this.getBool(this.keys.sidebarDark);
      this.isRightSidebarTheme = this.getBool(this.keys.rightSidebar);
      this.isHideSidebarTheme = this.getBool(this.keys.hideSidebar);
      this.isHeaderDarkTheme = this.getBool(this.keys.headerDark);
      this.isCardBorderTheme = this.getBool(this.keys.cardBorder);
      this.isCardBorderRadiusTheme = this.getBool(this.keys.cardRadius);
      this.isRTLEnabledTheme = this.getBool(this.keys.rtl);
    }
  }

  // Métodos seguros para localStorage
  private getBool(key: string): boolean {
    if (!this.isBrowser) return false;
    try {
      return JSON.parse(localStorage.getItem(key) || 'false');
    } catch {
      return false;
    }
  }

  private setBool(key: string, value: boolean): void {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Métodos públicos para cada configuración
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.setBool(this.keys.dark, this.isDarkTheme);
  }
  isDark() { return this.isDarkTheme; }

  toggleSidebarTheme() {
    this.isSidebarDarkTheme = !this.isSidebarDarkTheme;
    this.setBool(this.keys.sidebarDark, this.isSidebarDarkTheme);
  }
  isSidebarDark() { return this.isSidebarDarkTheme; }

  toggleRightSidebarTheme() {
    this.isRightSidebarTheme = !this.isRightSidebarTheme;
    this.setBool(this.keys.rightSidebar, this.isRightSidebarTheme);
  }
  isRightSidebar() { return this.isRightSidebarTheme; }

  toggleHideSidebarTheme() {
    this.isHideSidebarTheme = !this.isHideSidebarTheme;
    this.setBool(this.keys.hideSidebar, this.isHideSidebarTheme);
  }
  isHideSidebar() { return this.isHideSidebarTheme; }

  toggleHeaderTheme() {
    this.isHeaderDarkTheme = !this.isHeaderDarkTheme;
    this.setBool(this.keys.headerDark, this.isHeaderDarkTheme);
  }
  isHeaderDark() { return this.isHeaderDarkTheme; }

  toggleCardBorderTheme() {
    this.isCardBorderTheme = !this.isCardBorderTheme;
    this.setBool(this.keys.cardBorder, this.isCardBorderTheme);
  }
  isCardBorder() { return this.isCardBorderTheme; }

  toggleCardBorderRadiusTheme() {
    this.isCardBorderRadiusTheme = !this.isCardBorderRadiusTheme;
    this.setBool(this.keys.cardRadius, this.isCardBorderRadiusTheme);
  }
  isCardBorderRadius() { return this.isCardBorderRadiusTheme; }

  toggleRTLEnabledTheme() {
    this.isRTLEnabledTheme = !this.isRTLEnabledTheme;
    this.setBool(this.keys.rtl, this.isRTLEnabledTheme);
  }
  isRTLEnabled() { return this.isRTLEnabledTheme; }

  // Toggle de apertura del panel derecho
  private isToggled = new BehaviorSubject<boolean>(false);
  get isToggled$() {
    return this.isToggled.asObservable();
  }

  toggle() {
    this.isToggled.next(!this.isToggled.value);
  }
}
