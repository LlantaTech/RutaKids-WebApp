import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GlobalAlertComponent } from './global-alert.component';
import { GlobalAlertService } from '../../services/global-alert/global-alert.service';
import { CustomizerSettingsService } from '../../services/customizer-settings/customizer-settings.service';
import { of } from 'rxjs';

describe('GlobalAlertComponent', () => {
  let component: GlobalAlertComponent;
  let fixture: ComponentFixture<GlobalAlertComponent>;
  let alertService: GlobalAlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalAlertComponent],
      providers: [
        {
          provide: GlobalAlertService,
          useValue: {
            alert$: of({ type: 'success', message: 'Test message' }),
            showAlert: jasmine.createSpy()
          }
        },
        {
          provide: CustomizerSettingsService,
          useValue: {
            isToggled$: of(false)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalAlertComponent);
    component = fixture.componentInstance;
    alertService = TestBed.inject(GlobalAlertService);
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe agregar una alerta al recibir evento del servicio', () => {
    expect(component.alerts.length).toBe(1);
    expect(component.alerts[0].message).toBe('Test message');
  });

  it('debe eliminar alerta automáticamente después de 5 segundos', fakeAsync(() => {
    component.showAlert('success', 'Temporal');
    expect(component.alerts.length).toBe(2); // 1 ya venía del alert$ inicial

    tick(5000); // Simula el paso del tiempo
    expect(component.alerts.length).toBe(1);
  }));

  it('debe eliminar alerta manualmente', () => {
    const alert = component.alerts[0];
    component.removeAlert(alert.id);
    expect(component.alerts.length).toBe(0);
  });

  it('debe retornar la clase CSS correcta con getAlertClass()', () => {
    const result = component.getAlertClass('danger');
    expect(result).toBe('alert alert-bg-danger');
  });
});
