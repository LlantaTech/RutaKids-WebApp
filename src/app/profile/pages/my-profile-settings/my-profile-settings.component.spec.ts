import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileSettingsComponent } from './my-profile-settings.component';

describe('MyProfileSettingsComponent', () => {
  let component: MyProfileSettingsComponent;
  let fixture: ComponentFixture<MyProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfileSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
