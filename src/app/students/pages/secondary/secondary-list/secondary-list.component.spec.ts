import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryListComponent } from './secondary-list.component';

describe('StudentsListComponent', () => {
  let component: SecondaryListComponent;
  let fixture: ComponentFixture<SecondaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
