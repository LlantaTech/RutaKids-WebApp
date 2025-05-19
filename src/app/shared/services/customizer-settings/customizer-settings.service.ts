import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomizerSettingsService {
  private isBrowser: boolean;

  private isDarkTheme = false;
  private isSidebarDarkTheme = false;
  private isRightSidebarTheme = false;
  private isHideSidebarTheme = false;
  private isHeaderDarkTheme = false;
  private isCardBorderTheme = false;
  private isCardBorderRadiusTheme = false;
  private isRTLEnabledTheme = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.isDarkTheme = this.getBool('isDarkTheme');
      this.isSidebarDarkTheme = this.getBool('isSidebarDarkTheme');
      this.isRightSidebarTheme = this.getBool('isRightSidebarTheme');
      this.isHideSidebarTheme = this.getBool('isHideSidebarTheme');
      this.isHeaderDarkTheme = this.getBool('isHeaderDarkTheme');
      this.isCardBorderTheme = this.getBool('isCardBorderTheme');
      this.isCardBorderRadiusTheme = this.getBool('isCardBorderRadiusTheme');
      this.isRTLEnabledTheme = this.getBool('isRTLEnabledTheme');
    }
  }

  private getBool(key: string): boolean {
    if (!this.isBrowser) return false;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : false;
  }

  private setBool(key: string, value: boolean): void {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.setBool('isDarkTheme', this.isDarkTheme);
  }
  isDark() { return this.isDarkTheme; }

  toggleSidebarTheme() {
    this.isSidebarDarkTheme = !this.isSidebarDarkTheme;
    this.setBool('isSidebarDarkTheme', this.isSidebarDarkTheme);
  }
  isSidebarDark() { return this.isSidebarDarkTheme; }

  toggleRightSidebarTheme() {
    this.isRightSidebarTheme = !this.isRightSidebarTheme;
    this.setBool('isRightSidebarTheme', this.isRightSidebarTheme);
  }
  isRightSidebar() { return this.isRightSidebarTheme; }

  toggleHideSidebarTheme() {
    this.isHideSidebarTheme = !this.isHideSidebarTheme;
    this.setBool('isHideSidebarTheme', this.isHideSidebarTheme);
  }
  isHideSidebar() { return this.isHideSidebarTheme; }

  toggleHeaderTheme() {
    this.isHeaderDarkTheme = !this.isHeaderDarkTheme;
    this.setBool('isHeaderDarkTheme', this.isHeaderDarkTheme);
  }
  isHeaderDark() { return this.isHeaderDarkTheme; }

  toggleCardBorderTheme() {
    this.isCardBorderTheme = !this.isCardBorderTheme;
    this.setBool('isCardBorderTheme', this.isCardBorderTheme);
  }
  isCardBorder() { return this.isCardBorderTheme; }

  toggleCardBorderRadiusTheme() {
    this.isCardBorderRadiusTheme = !this.isCardBorderRadiusTheme;
    this.setBool('isCardBorderRadiusTheme', this.isCardBorderRadiusTheme);
  }
  isCardBorderRadius() { return this.isCardBorderRadiusTheme; }

  toggleRTLEnabledTheme() {
    this.isRTLEnabledTheme = !this.isRTLEnabledTheme;
    this.setBool('isRTLEnabledTheme', this.isRTLEnabledTheme);
  }
  isRTLEnabled() { return this.isRTLEnabledTheme; }

  private isToggled = new BehaviorSubject<boolean>(false);
  get isToggled$() {
    return this.isToggled.asObservable();
  }
  toggle() {
    this.isToggled.next(!this.isToggled.value);
  }
}
