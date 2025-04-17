import {Coordinates} from "../../shared/model/coordinates";

export interface Parent {
  type: string;
  dni: string;
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  email: string;
  phone: string;
  address: string;
  coordinates: Coordinates[];
}
