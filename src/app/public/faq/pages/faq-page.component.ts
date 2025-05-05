import { Component } from '@angular/core';
import {BasicExpansionComponent} from "./components/basic-expansion/basic-expansion.component";
import {RouterLink} from "@angular/router";
import {BreadcrumbComponent} from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [
    BasicExpansionComponent,
    RouterLink,
    BreadcrumbComponent
  ],
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {
  breadcrumbTitle = 'FAQ';
  breadcrumbPaths = ['FAQ'];

}
