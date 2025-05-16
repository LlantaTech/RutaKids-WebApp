import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRoutesFormComponent } from './school-routes-form.component';

describe('SchoolRoutesFormComponent', () => {
  let component: SchoolRoutesFormComponent;
  let fixture: ComponentFixture<SchoolRoutesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolRoutesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolRoutesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
