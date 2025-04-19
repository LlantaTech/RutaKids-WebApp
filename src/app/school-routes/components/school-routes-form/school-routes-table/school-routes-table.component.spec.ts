import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesTableComponent } from './school-routes-table.component';

describe('SchoolRoutesTableComponent', () => {
  let component: SchoolRoutesTableComponent;
  let fixture: ComponentFixture<SchoolRoutesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolRoutesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
