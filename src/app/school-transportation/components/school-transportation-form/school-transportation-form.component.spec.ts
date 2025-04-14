import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTransportationFormComponent } from './school-transportation-form.component';

describe('SchoolTransportationFormComponent', () => {
  let component: SchoolTransportationFormComponent;
  let fixture: ComponentFixture<SchoolTransportationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTransportationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolTransportationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
