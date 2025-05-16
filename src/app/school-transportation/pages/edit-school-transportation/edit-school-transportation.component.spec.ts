import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';
import { of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SchoolTransportationService } from '../../services/school-transportation.service';
import { SchoolTransportation } from '../../model/school-transportation';

// Mock routerLink
@Directive({ selector: '[routerLink]' })
class MockRouterLinkDirective {
  @Input() routerLink: any;
}

// Mock breadcrumb
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  template: ''
})
class MockBreadcrumbComponent {
  @Input() title = '';
  @Input() paths: string[] = [];
}

// Mock form
@Component({
  selector: 'app-school-transportation-form',
  standalone: true,
  template: ''
})
class MockSchoolTransportationFormComponent {
  @Input() schoolTransportation: any;
  @Output() submitClicked = new EventEmitter<void>();
  @Output() cancelClicked = new EventEmitter<void>();

  getFormData() {
    return new Map<string, string>([
      ['firstName', 'Editado'],
      ['licenseCode', 'X12345']
    ]);
  }
}

// Componente de prueba
@Component({
  selector: 'app-edit-school-transportation-test',
  standalone: true,
  imports: [CommonModule, MockBreadcrumbComponent, MockSchoolTransportationFormComponent],
  template: `
    <app-breadcrumb [title]="breadcrumbTitle" [paths]="breadcrumbPaths"></app-breadcrumb>
    <app-school-transportation-form
      [schoolTransportation]="formData"
      (submitClicked)="onSubmit()"
      (cancelClicked)="onCancel()"
      #formRef
    ></app-school-transportation-form>
  `
})
class EditSchoolTransportationComponentTest {
  breadcrumbTitle = 'Editar Movilidad';
  breadcrumbPaths = ['Movilidad', 'Editar'];

  formData: SchoolTransportation = {
    id: '1',
    dni: '', licenseCode: '', firstName: '', paternalLastName: '', maternalLastName: '',
    phone: '', email: '', address: '', vehiclePlate: '', vehicleBrand: '',
    vehicleModel: '', vehicleColor: '', driverPhoto: '', vehiclePhoto: ''
  };

  constructor(
    private service: SchoolTransportationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(id).subscribe((data: SchoolTransportation) => {
        this.formData = data;
      });
    }
  }

  onSubmit(): void {
    const id = this.formData.id;
    if (!id) return;

    const formData = new Map<string, string>([
      ['firstName', 'Editado'],
      ['licenseCode', 'X12345']
    ]);

    const jsonData: any = {};
    formData.forEach((value, key) => jsonData[key] = value);

    this.service.update(id, jsonData).subscribe(() => {
      this.router.navigate(['/school-transportation']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/school-transportation']);
  }
}

describe('EditSchoolTransportationComponentTest', () => {
  let component: EditSchoolTransportationComponentTest;
  let fixture: ComponentFixture<EditSchoolTransportationComponentTest>;
  let mockService: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockService = {
      getById: jasmine.createSpy('getById').and.returnValue(of({
        id: '1',
        firstName: 'Juan',
        licenseCode: 'ABC123',
        dni: '', paternalLastName: '', maternalLastName: '',
        phone: '', email: '', address: '', vehiclePlate: '',
        vehicleBrand: '', vehicleModel: '', vehicleColor: '',
        driverPhoto: '', vehiclePhoto: ''
      })),
      update: jasmine.createSpy('update').and.returnValue(of({}))
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    const mockRoute = {
      snapshot: {
        paramMap: {
          get: () => '1'
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [EditSchoolTransportationComponentTest],
      providers: [
        { provide: SchoolTransportationService, useValue: mockService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockRoute }
      ],
      declarations: [MockRouterLinkDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSchoolTransportationComponentTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente y cargar los datos', () => {
    expect(component).toBeTruthy();
    expect(mockService.getById).toHaveBeenCalledWith('1');
    expect(component.formData.firstName).toBe('Juan');
  });

  it('debe actualizar y navegar al hacer submit', () => {
    component.onSubmit();
    expect(mockService.update).toHaveBeenCalledWith('1', {
      firstName: 'Editado',
      licenseCode: 'X12345'
    });
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/school-transportation']);
  });

  it('debe navegar al hacer cancel', () => {
    component.onCancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/school-transportation']);
  });
});
