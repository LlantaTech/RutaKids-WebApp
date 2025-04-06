import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCardsComponent } from './driver-cards.component';

describe('DriverCardsComponent', () => {
  let component: DriverCardsComponent;
  let fixture: ComponentFixture<DriverCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
