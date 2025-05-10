import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SchoolTransportationService } from './school-transportation.service';
import { SchoolTransportation } from '../model/school-transportation';

describe('SchoolTransportationService', () => {
  let service: SchoolTransportationService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://localhost:3000/school-transportation';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SchoolTransportationService]
    });

    service = TestBed.inject(SchoolTransportationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya peticiones pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe enviar una solicitud POST en create()', () => {
    const payload = { firstName: 'Juan' };
    service.create(payload).subscribe();

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(payload);
    req.flush({});
  });

  it('debe obtener todos los registros con getAll()', () => {
    const mockResponse: SchoolTransportation[] = [];
    service.getAll().subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('debe eliminar un registro con delete()', () => {
    const id = '123';
    service.delete(id).subscribe();

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('debe obtener un registro por id con getById()', () => {
    const id = '123';
    const mockItem: SchoolTransportation = {
      id: '123',
      dni: '12345678',
      licenseCode: 'ABC123',
      firstName: 'Luis',
      paternalLastName: 'Gonzales',
      maternalLastName: 'Perez',
      phone: '987654321',
      email: '',
      address: '',
      vehiclePlate: '',
      vehicleBrand: '',
      vehicleModel: '',
      vehicleColor: '',
      driverPhoto: '',
      vehiclePhoto: ''
    };

    service.getById(id).subscribe(data => {
      expect(data).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItem);
  });

  it('debe actualizar un registro con update()', () => {
    const id = '123';
    const formData = new FormData();
    formData.append('firstName', 'Luis');

    service.update(id, formData).subscribe();

    const req = httpMock.expectOne(`${baseUrl}/${id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toBe(formData);
    req.flush({});
  });
});
