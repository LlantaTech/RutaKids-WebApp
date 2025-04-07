import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFleetComponent } from './create-fleet.component';

describe('CreateFleetComponent', () => {
  let component: CreateFleetComponent;
  let fixture: ComponentFixture<CreateFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFleetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
