import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryComponent } from './primary.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrimaryComponent', () => {
  let component: PrimaryComponent;
  let fixture: ComponentFixture<PrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
