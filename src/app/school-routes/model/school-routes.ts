import {Student} from "../../students/model/student";
import {SchoolTransportation} from "../../school-transportation/model/school-transportation";

export interface SchoolRoutes {
  id?: string;
  routeCode: string;
  schoolTransportation: SchoolTransportation;
  students: Student[];
}
