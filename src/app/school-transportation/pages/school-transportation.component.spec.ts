import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTransportationComponent } from './school-transportation.component';

describe('SchoolTransportationComponent', () => {
  let component: SchoolTransportationComponent;
  let fixture: ComponentFixture<SchoolTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTransportationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
