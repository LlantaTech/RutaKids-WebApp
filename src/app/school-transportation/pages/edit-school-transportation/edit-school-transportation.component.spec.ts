import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolTransportationComponent } from './edit-school-transportation.component';

describe('EditSchoolTransportationComponent', () => {
  let component: EditSchoolTransportationComponent;
  let fixture: ComponentFixture<EditSchoolTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSchoolTransportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSchoolTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
