import {Parent} from "./parent";

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
  photo?: string;
  hasMobility: boolean;
  parents: Parent[];
}
