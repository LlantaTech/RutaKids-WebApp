export interface SchoolTransportation {
  dni: string;
  licenseCode: string;
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  phone: string;
  email?: string;
  address: string;

  vehiclePlate: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleColor: string;

  driverPhoto: string;
  vehiclePhoto: string;
}
