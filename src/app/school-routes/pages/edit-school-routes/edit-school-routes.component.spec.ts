import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolRoutesComponent } from './edit-school-routes.component';

describe('EditSchoolRoutesComponent', () => {
  let component: EditSchoolRoutesComponent;
  let fixture: ComponentFixture<EditSchoolRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSchoolRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSchoolRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
