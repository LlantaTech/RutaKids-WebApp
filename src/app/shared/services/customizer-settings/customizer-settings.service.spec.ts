import { TestBed } from '@angular/core/testing';
import { CustomizerSettingsService } from './customizer-settings.service';
import { PLATFORM_ID } from '@angular/core';
import {skip} from "rxjs";

describe('CustomizerSettingsService', () => {
  let service: CustomizerSettingsService;

  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => (store[key] = value),
      clear: () => (store = {}),
      removeItem: (key: string) => delete store[key]
    };
  })();

  beforeEach(() => {
    spyOnProperty(window, 'localStorage').and.returnValue(localStorageMock as any);

    TestBed.configureTestingModule({
      providers: [
        CustomizerSettingsService,
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });

    service = TestBed.inject(CustomizerSettingsService);
    localStorage.clear();
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('toggleTheme debe cambiar el estado y guardarlo en localStorage', () => {
    service.toggleTheme();
    expect(service.isDark()).toBeTrue();
    expect(localStorage.getItem('isDarkTheme')).toBe('true');
  });

  it('toggleSidebarTheme debe funcionar correctamente', () => {
    service.toggleSidebarTheme();
    expect(service.isSidebarDark()).toBeTrue();
    expect(localStorage.getItem('isSidebarDarkTheme')).toBe('true');
  });

  it('toggleRightSidebarTheme debe funcionar correctamente', () => {
    service.toggleRightSidebarTheme();
    expect(service.isRightSidebar()).toBeTrue();
  });

  it('toggleHideSidebarTheme debe funcionar correctamente', () => {
    service.toggleHideSidebarTheme();
    expect(service.isHideSidebar()).toBeTrue();
  });

  it('toggleHeaderTheme debe funcionar correctamente', () => {
    service.toggleHeaderTheme();
    expect(service.isHeaderDark()).toBeTrue();
  });

  it('toggleCardBorderTheme debe funcionar correctamente', () => {
    service.toggleCardBorderTheme();
    expect(service.isCardBorder()).toBeTrue();
  });

  it('toggleCardBorderRadiusTheme debe funcionar correctamente', () => {
    service.toggleCardBorderRadiusTheme();
    expect(service.isCardBorderRadius()).toBeTrue();
  });

  it('toggleRTLEnabledTheme debe funcionar correctamente', () => {
    service.toggleRTLEnabledTheme();
    expect(service.isRTLEnabled()).toBeTrue();
  });

  it('toggle debe emitir nuevo valor en isToggled$', (done) => {
    service.isToggled$.pipe(skip(1)).subscribe(value => {
      expect(value).toBeTrue();
      done();
    });

    service.toggle();
  });
});
