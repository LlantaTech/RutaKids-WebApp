import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {BreadcrumbComponent} from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
    selector: 'app-blank-page',
    standalone: true,
    imports: [RouterLink, BreadcrumbComponent],
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent {
  breadcrumbTitle = 'Blank Page';
  breadcrumbPaths = ['Blank Page'];
}
