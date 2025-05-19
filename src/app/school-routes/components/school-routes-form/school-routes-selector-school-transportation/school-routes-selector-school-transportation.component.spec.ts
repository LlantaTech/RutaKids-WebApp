import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesSelectorSchoolTransportationComponent } from './school-routes-selector-school-transportation.component';

describe('SchoolRoutesSelectorComponent', () => {
  let component: SchoolRoutesSelectorSchoolTransportationComponent;
  let fixture: ComponentFixture<SchoolRoutesSelectorSchoolTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesSelectorSchoolTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolRoutesSelectorSchoolTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
