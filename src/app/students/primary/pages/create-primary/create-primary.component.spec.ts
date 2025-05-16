import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePrimaryComponent } from './create-primary.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CustomizerSettingsService } from '../../../../shared/services/customizer-settings/customizer-settings.service';
import { SchoolTransportationService } from '../../../../school-transportation/services/school-transportation.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreatePrimaryComponent', () => {
  let component: CreatePrimaryComponent;
  let fixture: ComponentFixture<CreatePrimaryComponent>;
  let mockCustomizerSettingsService: jasmine.SpyObj<CustomizerSettingsService>;

  beforeEach(async () => {
    mockCustomizerSettingsService = jasmine.createSpyObj('CustomizerSettingsService', ['toggleRTLEnabledTheme'], {
      isToggled$: of(false)
    });

    await TestBed.configureTestingModule({
      imports: [
        CreatePrimaryComponent,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        {   provide: CustomizerSettingsService,
            useValue: jasmine.createSpyObj('CustomizerSettingsService', ['toggleRTLEnabledTheme'], {
              isToggled$: of(false),
              isRTLEnabled: () => false,  // <--- Esto es lo que te faltaba
            })
        },
        { provide: SchoolTransportationService, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => key === 'grade' ? '3' : null
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el nivel como "Primaria" y grado desde la ruta', () => {
    expect(component.level).toBe('Primaria');
    expect(component.grade).toBe(3);
  });

  it('debería ejecutar la función onSubmit sin errores', () => {
    expect(() => component.onSubmit()).not.toThrow();
  });

  it('debería ejecutar la función onCancel sin errores', () => {
    expect(() => component.onCancel()).not.toThrow();
  });
});
