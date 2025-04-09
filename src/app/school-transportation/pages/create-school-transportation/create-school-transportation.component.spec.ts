import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolTransportationComponent } from './create-school-transportation.component';

describe('CreateSchoolTransportationComponent', () => {
  let component: CreateSchoolTransportationComponent;
  let fixture: ComponentFixture<CreateSchoolTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSchoolTransportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSchoolTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
