import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradeCardComponent } from './grade-card.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GradeCardComponent', () => {
  let component: GradeCardComponent;
  let fixture: ComponentFixture<GradeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCardComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GradeCardComponent);
    component = fixture.componentInstance;
    component.badgeLabel = 'Primaria';
    component.imageUrl = 'https://example.com/imagen.jpg';
    component.title = '1er Grado';
    component.description = 'Niños de 6 a 7 años';
    component.grade = 1;
    fixture.detectChanges();
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título y la descripción correctamente', () => {
    const titleElement = fixture.nativeElement.querySelector('h5');
    const descriptionElement = fixture.nativeElement.querySelector('p');
    expect(titleElement.textContent).toContain('1er Grado');
    expect(descriptionElement.textContent).toContain('Niños de 6 a 7 años');
  });

  it('debería mostrar la imagen con la URL correcta', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain('https://example.com/imagen.jpg');
  });

  it('debería emitir el evento cardClick al hacer clic en la tarjeta', () => {
    spyOn(component.cardClick, 'emit');
    const card = fixture.debugElement.query(By.css('mat-card'));
    card.triggerEventHandler('click', null);
    expect(component.cardClick.emit).toHaveBeenCalledWith(1);
  });
});
