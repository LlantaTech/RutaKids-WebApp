import { Component } from '@angular/core';
import {BasicExpansionComponent} from "../components/basic-expansion/basic-expansion.component";
import {BreadcrumbComponent} from "../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [
    BasicExpansionComponent,
    BreadcrumbComponent
  ],
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {
  breadcrumbTitle = 'FAQ';
  breadcrumbPaths = ['FAQ'];

}
