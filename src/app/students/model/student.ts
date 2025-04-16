import {Parent} from "./parent";

export interface Student {
  id?: string;
  dni: string;
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  level: string;
  grade: number;
  email?: string;
  phone?: string;
  address: string;
  district: string;
  photo?: string;
  hasMobility: boolean;
  parents: Parent[];
}
