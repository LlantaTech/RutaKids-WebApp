import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqPageComponent } from './faq-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FaqPageComponent', () => {
  let component: FaqPageComponent;
  let fixture: ComponentFixture<FaqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FaqPageComponent,
        RouterTestingModule,
        BrowserAnimationsModule // necesario por @bodyExpansion de Angular Material
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el título y ruta del breadcrumb correctamente asignados', () => {
    expect(component.breadcrumbTitle).toBe('FAQ');
    expect(component.breadcrumbPaths).toEqual(['FAQ']);
  });
});
