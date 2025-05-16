import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-primary',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent {

}
