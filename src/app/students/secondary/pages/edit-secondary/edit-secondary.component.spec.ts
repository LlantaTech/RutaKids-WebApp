import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecondaryComponent } from './edit-secondary.component';

describe('EditStudentComponent', () => {
  let component: EditSecondaryComponent;
  let fixture: ComponentFixture<EditSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
