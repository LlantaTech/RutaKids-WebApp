import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesComponent } from './school-routes.component';

describe('SchoolRoutesComponent', () => {
  let component: SchoolRoutesComponent;
  let fixture: ComponentFixture<SchoolRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
