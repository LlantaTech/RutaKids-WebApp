import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolRoutesComponent } from './create-school-routes.component';

describe('CreateSchoolRoutesComponent', () => {
  let component: CreateSchoolRoutesComponent;
  let fixture: ComponentFixture<CreateSchoolRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSchoolRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSchoolRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
