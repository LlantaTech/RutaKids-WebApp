import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPrimaryComponent } from './edit-primary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { StudentService } from '../../../shared/services/student.service';
import { CustomizerSettingsService } from '../../../../shared/services/customizer-settings/customizer-settings.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditPrimaryComponent', () => {
  let component: EditPrimaryComponent;
  let fixture: ComponentFixture<EditPrimaryComponent>;
  let mockService: jasmine.SpyObj<StudentService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('StudentService', ['getById', 'update']);
    mockService.getById.and.returnValue(of({
      id: '1',
      dni: '',
      firstName: '',
      paternalLastName: '',
      maternalLastName: '',
      level: '',
      grade: 1,
      email: '',
      phone: '',
      address: '',
      coordinates: [],
      hasMobility: false,
      parents: []
    }));

    await TestBed.configureTestingModule({
      imports: [EditPrimaryComponent, RouterTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: StudentService, useValue: mockService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  const params: Record<string, string> = { id: '1', grade: '1' };
                  return params[key];
                }
              }
            }
          }
        },
        {
          provide: CustomizerSettingsService,
          useValue: {
            isToggled$: of(false),
            toggleRTLEnabledTheme: () => {},
            isRTLEnabled: () => false
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los datos del estudiante en ngOnInit', () => {
    expect(component.student).toBeTruthy();
    expect(component.student.grade).toBe(1);
  });

  it('debería llamar a update y navegar al guardar', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    mockService.update.and.returnValue(of({}));

    component.student = { ...component.student, id: '1' };
    component.onSubmit();

    expect(mockService.update).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/students', 'primary', 1]);
  });

  it('debería navegar al listado al cancelar', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.onCancel();
    expect(navigateSpy).toHaveBeenCalledWith(['/students', 'primary', 1]);
  });
});
