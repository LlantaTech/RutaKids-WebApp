import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradeCardsPrimaryComponent } from './grade-cards-primary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('GradeCardsPrimaryComponent', () => {
  let component: GradeCardsPrimaryComponent;
  let fixture: ComponentFixture<GradeCardsPrimaryComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCardsPrimaryComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GradeCardsPrimaryComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería contener 6 grados para primaria', () => {
    expect(component.grades.length).toBe(6);
    expect(component.grades[0].grade).toBe(1);
    expect(component.grades[5].grade).toBe(6);
  });

  it('debería redirigir al grado correcto al hacer clic', () => {
    component.goToGrade(3);
    expect(navigateSpy).toHaveBeenCalledWith(['/students/primary', 3]);
  });

  it('debería tener título y rutas de breadcrumb configuradas', () => {
    expect(component.breadcrumbTitle).toBe('Grados del Nivel Primario');
    expect(component.breadcrumbPaths).toEqual(['Primaria']);
  });
});
