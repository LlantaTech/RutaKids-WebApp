export interface Parent {
  type: string;
  dni: string;
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  email: string;
  phone: string;
  address: string;
  district: string;
}

export interface Student {
  dni: string;
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  level: string;
  grade: string;
  email?: string;
  phone?: string;
  address: string;
  district: string;
  hasMobility: boolean;
  parents: Parent[];
}
