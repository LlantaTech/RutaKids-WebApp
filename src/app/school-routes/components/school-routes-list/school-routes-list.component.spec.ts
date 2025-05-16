import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesListComponent } from './school-routes-list.component';

describe('SchoolRoutesListComponent', () => {
  let component: SchoolRoutesListComponent;
  let fixture: ComponentFixture<SchoolRoutesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolRoutesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
