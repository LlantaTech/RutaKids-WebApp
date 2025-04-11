import { Component } from '@angular/core';
import {StudentsListComponent} from "../../../components/students-list/students-list.component";

@Component({
  selector: 'app-primary-list',
  standalone: true,
  imports: [
    StudentsListComponent
  ],
  templateUrl: './secondary-list.component.html',
  styleUrl: './secondary-list.component.scss'
})
export class SecondaryListComponent {

}
