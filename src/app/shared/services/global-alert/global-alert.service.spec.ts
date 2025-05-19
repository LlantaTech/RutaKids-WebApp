import { TestBed } from '@angular/core/testing';
import { GlobalAlertService } from './global-alert.service';
import { GlobalAlert } from '../../model/global-alert';

describe('GlobalAlertService', () => {
  let service: GlobalAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalAlertService);
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe emitir una alerta al llamar showAlert()', (done) => {
    // Arrange
    const expected: Omit<GlobalAlert, 'id'> = {
      type: 'success',
      message: 'Operación exitosa'
    };

    // Act
    service.alert$.subscribe(alert => {
      // Assert
      expect(alert).toEqual(expected);
      done();
    });

    service.showAlert(expected.type, expected.message);
  });
});
