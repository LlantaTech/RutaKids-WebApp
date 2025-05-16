import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    @Input() title: string = '';
    @Input() paths: string [] = [];
}
