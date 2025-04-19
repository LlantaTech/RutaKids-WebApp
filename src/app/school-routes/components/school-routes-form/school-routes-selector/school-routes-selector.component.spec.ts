import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesSelectorComponent } from './school-routes-selector.component';

describe('SchoolRoutesSelectorComponent', () => {
  let component: SchoolRoutesSelectorComponent;
  let fixture: ComponentFixture<SchoolRoutesSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolRoutesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
