import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryListComponent } from './primary-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { StudentService } from '../../../shared/services/student.service';
import { Student } from '../../../model/student';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PrimaryListComponent', () => {
  let component: PrimaryListComponent;
  let fixture: ComponentFixture<PrimaryListComponent>;
  let mockStudentService: jasmine.SpyObj<StudentService>;

  const mockStudents: Student[] = [
    { id: '1', level: 'Primaria', grade: 1 } as Student,
    { id: '2', level: 'Secundaria', grade: 2 } as Student,
    { id: '3', level: 'Primaria', grade: 2 } as Student
  ];

  beforeEach(async () => {
    mockStudentService = jasmine.createSpyObj('StudentService', ['getAll', 'delete']);
    mockStudentService.getAll.and.returnValue(of(mockStudents));
    mockStudentService.delete.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      imports: [PrimaryListComponent, RouterTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: StudentService, useValue: mockStudentService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: new Map([['grade', '2']]) }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería filtrar correctamente los estudiantes de primaria por grado', () => {
    expect(component.dataSource.data.length).toBe(1);
    expect(component.dataSource.data[0].id).toBe('3');
  });

  it('debería establecer el enlace de creación correctamente', () => {
    expect(component.addLink).toBe('/students/primary/2/create');
  });

  it('debería eliminar un estudiante de la lista', () => {
    const studentToDelete = { id: '3', level: 'Primaria', grade: 2 } as Student;
    component.dataSource.data = [studentToDelete];
    component.deleteStudent(studentToDelete);
    expect(mockStudentService.delete).toHaveBeenCalledWith('3');
  });
});
