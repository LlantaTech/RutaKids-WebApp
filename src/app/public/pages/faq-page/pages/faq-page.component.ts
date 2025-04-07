import { Component } from '@angular/core';
import {BasicExpansionComponent} from "./basic-expansion/basic-expansion.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [
    BasicExpansionComponent,
    RouterLink
  ],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

}
