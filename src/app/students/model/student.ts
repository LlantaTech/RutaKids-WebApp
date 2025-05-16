import {Parent} from "./parent";
import {Coordinates} from "../../shared/model/coordinates";

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
  coordinates: Coordinates[];
  photo?: string;
  hasMobility: boolean;
  parents: Parent[];
}
