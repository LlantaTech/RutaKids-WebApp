import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolTransportationService } from '../../services/school-transportation.service';
import { SchoolTransportation } from '../../model/school-transportation';
import { SchoolTransportationListComponent } from './school-transportation-list.component';

// Mock del breadcrumb
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  template: ''
})
class MockBreadcrumbComponent {
  @Input() title = '';
  @Input() paths: string[] = [];
}

describe('SchoolTransportationListComponent', () => {
  let component: SchoolTransportationListComponent;
  let fixture: ComponentFixture<SchoolTransportationListComponent>;
  let mockService: any;

  const mockData: SchoolTransportation[] = [
    {
      id: '1',
      firstName: 'Luis',
      paternalLastName: 'Gonzales',
      maternalLastName: 'Perez',
      dni: '12345678',
      licenseCode: 'ABC123',
      phone: '987654321',
      email: 'luis@mail.com',
      address: 'Av. Siempre Viva 123',
      vehiclePlate: 'XYZ-123',
      vehicleBrand: 'Toyota',
      vehicleModel: 'Hiace',
      vehicleColor: 'Blanco',
      driverPhoto: '',
      vehiclePhoto: ''
    }
  ];

  beforeEach(async () => {
    mockService = {
      getAll: jasmine.createSpy('getAll').and.returnValue(of(mockData)),
      delete: jasmine.createSpy('delete').and.returnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [
        SchoolTransportationListComponent,
        MockBreadcrumbComponent,
        RouterTestingModule.withRoutes([]),
        NoopAnimationsModule // Solución para errores de animación de Angular Material
      ],
      providers: [
        { provide: SchoolTransportationService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolTransportationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe llamar al servicio y cargar los datos en ngOnInit', () => {
    expect(mockService.getAll).toHaveBeenCalled();
    expect(component.dataSource.data.length).toBe(1);
    expect(component.dataSource.data[0].firstName).toBe('Luis');
  });

  it('debe aplicar el filtro correctamente (por nombre)', () => {
    const mockEvent = {
      target: { value: 'luis' }
    } as unknown as Event;

    component.applyFilter(mockEvent);
    expect(component.dataSource.filter).toBe('luis');
  });

  it('debe navegar a la vista de edición al llamar onEdit()', () => {
    const spy = spyOn(component['router'], 'navigate');
    component.onEdit(mockData[0]);
    expect(spy).toHaveBeenCalledWith(['/school-transportation/edit', '1']);
  });

  it('debe eliminar y volver a cargar la lista al llamar onDelete()', () => {
    component.onDelete(mockData[0]);
    expect(mockService.delete).toHaveBeenCalledWith('1');
    expect(mockService.getAll).toHaveBeenCalledTimes(2);
  });
});
