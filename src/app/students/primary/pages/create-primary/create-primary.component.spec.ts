import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrimaryComponent } from './create-primary.component';

describe('CreateStudentComponent', () => {
  let component: CreatePrimaryComponent;
  let fixture: ComponentFixture<CreatePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
