import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolTransportationFormComponent } from './school-transportation-form.component';
import { SchoolTransportation } from '../../model/school-transportation';
import { By } from '@angular/platform-browser';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('SchoolTransportationFormComponent', () => {
  let component: SchoolTransportationFormComponent;
  let fixture: ComponentFixture<SchoolTransportationFormComponent>;

  const mockData: SchoolTransportation = {
    id: '1',
    dni: '12345678',
    licenseCode: 'L123',
    firstName: 'Carlos',
    paternalLastName: 'Ramirez',
    maternalLastName: 'Diaz',
    phone: '987654321',
    email: 'carlos@test.com',
    address: 'Av. Siempre Viva 123',
    vehiclePlate: 'ABC-123',
    vehicleBrand: 'Toyota',
    vehicleModel: 'Hiace',
    vehicleColor: 'Blanco',
    driverPhoto: '',
    vehiclePhoto: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTransportationFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolTransportationFormComponent);
    component = fixture.componentInstance;
    component.schoolTransportation = { ...mockData };
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe emitir submitClicked al hacer clic en "Guardar"', () => {
    spyOn(component.submitClicked, 'emit');

    const btn = fixture.debugElement.query(By.css('button[type="submit"]'));
    btn.nativeElement.click();

    expect(component.submitClicked.emit).toHaveBeenCalled();
  });

  it('debe emitir cancelClicked al hacer clic en "Cancelar"', () => {
    spyOn(component.cancelClicked, 'emit');

    const btn = fixture.debugElement.queryAll(By.css('button'))[1]; // segundo botón
    btn.nativeElement.click();

    expect(component.cancelClicked.emit).toHaveBeenCalled();
  });

  it('debe generar FormData con los campos del modelo', () => {
    const formData = component.getFormData();
    expect(formData.get('dni')).toBe('12345678');
    expect(formData.get('firstName')).toBe('Carlos');
    expect(formData.get('vehiclePlate')).toBe('ABC-123');
  });
});
