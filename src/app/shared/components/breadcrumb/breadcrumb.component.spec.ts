import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el título correctamente', () => {
    component.title = 'Prueba de Breadcrumb';
    fixture.detectChanges();

    const titleEl = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(titleEl.textContent).toContain('Prueba de Breadcrumb');
  });

  it('debe mostrar los elementos de paths en una lista', () => {
    component.paths = ['Primero', 'Segundo'];
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.breadcrumb-item'));
    expect(items.length).toBe(3); // 1 por el dashboard + 2 del paths
    expect(items[1].nativeElement.textContent.trim()).toBe('Primero');
    expect(items[2].nativeElement.textContent.trim()).toBe('Segundo');
  });

  it('debe contener un routerLink al dashboard ("/")', () => {
    fixture.detectChanges();
    const linkEl = fixture.debugElement.query(By.css('a[routerLink="/"]'));
    expect(linkEl).toBeTruthy();
  });
});
