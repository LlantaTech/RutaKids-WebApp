import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCardsSecondaryComponent } from './grade-cards-secondary.component';

describe('GradeCardsPageComponent', () => {
  let component: GradeCardsSecondaryComponent;
  let fixture: ComponentFixture<GradeCardsSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCardsSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeCardsSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
