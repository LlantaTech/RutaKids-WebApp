import { Component } from '@angular/core';
import {StudentsListComponent} from "../../../components/students-list/students-list.component";

@Component({
  selector: 'app-primary-list',
  standalone: true,
  imports: [
    StudentsListComponent
  ],
  templateUrl: './primary-list.component.html',
  styleUrl: './primary-list.component.scss'
})
export class PrimaryListComponent {

}
