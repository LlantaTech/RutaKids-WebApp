import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesSelectorStudentsComponent } from './school-routes-selector-students.component';

describe('SchoolRoutesSelectorComponent', () => {
  let component: SchoolRoutesSelectorStudentsComponent;
  let fixture: ComponentFixture<SchoolRoutesSelectorStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesSelectorStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolRoutesSelectorStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
