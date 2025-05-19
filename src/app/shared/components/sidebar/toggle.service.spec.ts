import { TestBed } from '@angular/core/testing';
import { ToggleService } from './toggle.service';
import { skip } from 'rxjs/operators';

describe('ToggleService', () => {
  let service: ToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleService);
  });

  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debe emitir true después de toggle()', (done) => {
    // Arrange: ignoramos el valor inicial `false`
    service.isSidebarToggled$.pipe(skip(1)).subscribe(value => {
      // Assert
      expect(value).toBeTrue();
      done();
    });

    // Act
    service.toggle();
  });
});
