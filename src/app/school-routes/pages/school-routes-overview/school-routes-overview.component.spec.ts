import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesOverviewComponent } from './school-routes-overview.component';

describe('SchoolRoutesOverviewComponent', () => {
  let component: SchoolRoutesOverviewComponent;
  let fixture: ComponentFixture<SchoolRoutesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolRoutesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
