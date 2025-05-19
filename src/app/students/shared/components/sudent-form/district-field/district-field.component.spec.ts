import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistrictFieldComponent } from './district-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DistrictFieldComponent', () => {
  let component: DistrictFieldComponent;
  let fixture: ComponentFixture<DistrictFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictFieldComponent, BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty value', () => {
    expect(component.value).toBe('');
  });

  it('should update value when updateValue is called', () => {
    const newValue = 'miraflores';
    spyOn(component, 'onChange');
    spyOn(component, 'onTouched');

    component.updateValue(newValue);

    expect(component.value).toBe(newValue);
    expect(component.onChange).toHaveBeenCalledWith(newValue);
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should write value via writeValue method', () => {
    component.writeValue('lince');
    expect(component.value).toBe('lince');
  });
});
