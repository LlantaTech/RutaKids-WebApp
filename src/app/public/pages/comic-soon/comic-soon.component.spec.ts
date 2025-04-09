import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSoonComponent } from './comic-soon.component';

describe('ComicSoonComponent', () => {
  let component: ComicSoonComponent;
  let fixture: ComponentFixture<ComicSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicSoonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
