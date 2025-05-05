import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrimaryComponent } from './edit-primary.component';

describe('EditStudentComponent', () => {
  let component: EditPrimaryComponent;
  let fixture: ComponentFixture<EditPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
