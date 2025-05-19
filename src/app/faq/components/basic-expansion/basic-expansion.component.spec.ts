import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicExpansionComponent } from './basic-expansion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomizerSettingsService } from '../../../shared/services/customizer-settings/customizer-settings.service';
import { of } from 'rxjs';

describe('BasicExpansionComponent', () => {
  let component: BasicExpansionComponent;
  let fixture: ComponentFixture<BasicExpansionComponent>;
  let mockThemeService: jasmine.SpyObj<CustomizerSettingsService>;

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj('CustomizerSettingsService', ['toggleTheme', 'toggleRTLEnabledTheme'], {
      isToggled$: of(false),
      isDark: () => false,
      isRTLEnabled: () => false
    });

    await TestBed.configureTestingModule({
      imports: [BasicExpansionComponent, BrowserAnimationsModule],
      providers: [{ provide: CustomizerSettingsService, useValue: mockThemeService }]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el panelOpenState en false al inicio', () => {
    expect(component.panelOpenState).toBeFalse();
  });

  it('debería establecer panelOpenState en true cuando se abre el panel', () => {
    component.panelOpenState = true;
    fixture.detectChanges();
    expect(component.panelOpenState).toBeTrue();
  });

  it('debería llamar toggleTheme() del servicio al ejecutarse', () => {
    component.toggleTheme();
    expect(mockThemeService.toggleTheme).toHaveBeenCalled();
  });

  it('debería llamar toggleRTLEnabledTheme() del servicio al ejecutarse', () => {
    component.toggleRTLEnabledTheme();
    expect(mockThemeService.toggleRTLEnabledTheme).toHaveBeenCalled();
  });
});
