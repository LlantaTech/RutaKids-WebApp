import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTransportationListComponent } from './school-transportation-list.component';

describe('SchoolTransportationListComponent', () => {
  let component: SchoolTransportationListComponent;
  let fixture: ComponentFixture<SchoolTransportationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTransportationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolTransportationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
