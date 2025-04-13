import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictFieldComponent } from './district-field.component';

describe('DistrictFieldComponent', () => {
  let component: DistrictFieldComponent;
  let fixture: ComponentFixture<DistrictFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistrictFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
