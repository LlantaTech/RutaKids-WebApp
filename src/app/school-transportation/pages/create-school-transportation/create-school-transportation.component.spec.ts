import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SchoolTransportationService } from '../../services/school-transportation.service';

// 🔹 Mock routerLink directive
@Directive({
  selector: '[routerLink]'
})
class MockRouterLinkDirective {
  @Input() routerLink: any;
}

// 🔹 Mock breadcrumb component
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  template: ''
})
class MockBreadcrumbComponent {
  @Input() title = '';
  @Input() paths: string[] = [];
}

// 🔹 Mock form component
@Component({
  selector: 'app-school-transportation-form',
  standalone: true,
  template: ''
})
class MockSchoolTransportationFormComponent {
  @Input() schoolTransportation: any;
  @Output() submitClicked = new EventEmitter<void>();
  @Output() cancelClicked = new EventEmitter<void>();
}

// 🔹 Wrapper para test
@Component({
  selector: 'app-test-create-school-transportation',
  standalone: true,
  imports: [CommonModule, MockBreadcrumbComponent, MockSchoolTransportationFormComponent],
  template: `
    <app-breadcrumb [title]="breadcrumbTitle" [paths]="breadcrumbPaths"></app-breadcrumb>
    <app-school-transportation-form
      [schoolTransportation]="formData"
      (submitClicked)="onSubmit()"
      (cancelClicked)="onCancel()"
    ></app-school-transportation-form>
  `
})
class CreateSchoolTransportationTestComponent {
  breadcrumbTitle = 'Crear Movilidad';
  breadcrumbPaths = ['Movilidad', 'Crear'];

  formData = {
    dni: '', licenseCode: '', firstName: '', paternalLastName: '', maternalLastName: '',
    phone: '', email: '', address: '', vehiclePlate: '', vehicleBrand: '',
    vehicleModel: '', vehicleColor: '', driverPhoto: '', vehiclePhoto: ''
  };

  constructor(
    private schoolTransportationService: SchoolTransportationService,
    private router: Router
  ) {}

  onSubmit() {
    this.schoolTransportationService.create(this.formData).subscribe(() => {
      this.router.navigate(['/school-transportation']);
    });
  }

  onCancel() {
    this.router.navigate(['/school-transportation']);
  }
}

describe('CreateSchoolTransportationComponent (wrapped test)', () => {
  let component: CreateSchoolTransportationTestComponent;
  let fixture: ComponentFixture<CreateSchoolTransportationTestComponent>;
  let mockService: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockService = {
      create: jasmine.createSpy('create').and.returnValue(of({}))
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      imports: [CreateSchoolTransportationTestComponent],
      providers: [
        { provide: SchoolTransportationService, useValue: mockService },
        { provide: Router, useValue: mockRouter }
      ],
      declarations: [MockRouterLinkDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSchoolTransportationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe llamar al servicio y navegar al hacer submit', () => {
    component.onSubmit();
    expect(mockService.create).toHaveBeenCalledWith(component.formData);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/school-transportation']);
  });

  it('debe navegar al hacer cancel', () => {
    component.onCancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/school-transportation']);
  });
});
