import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainLayoutComponent } from './main-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomizerSettingsService } from '../../services/customizer-settings/customizer-settings.service';
import { ToggleService } from '../../components/sidebar/toggle.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MainLayoutComponent,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        CustomizerSettingsService,
        ToggleService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe inicializar con valores por defecto', () => {
    expect(component.title).toBe('RutaKis - LlantaTech');
    expect(component.isSidebarToggled).toBeFalse();
    expect(component.isToggled).toBeFalse();
  });

  it('debe tener <router-outlet>', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
