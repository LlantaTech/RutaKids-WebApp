import {RouterOutlet} from "@angular/router";

declare let $: any;
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet
  ]
})

export class AppComponent {

}
