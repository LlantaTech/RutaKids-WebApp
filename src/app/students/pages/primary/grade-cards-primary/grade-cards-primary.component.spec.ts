import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCardsPrimaryComponent } from './grade-cards-primary.component';

describe('GradeCardsPageComponent', () => {
  let component: GradeCardsPrimaryComponent;
  let fixture: ComponentFixture<GradeCardsPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCardsPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeCardsPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
