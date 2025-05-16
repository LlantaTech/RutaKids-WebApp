import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Router } from "@angular/router";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";
import {GradeCardComponent} from "../../../shared/components/grade-card/grade-card.component";

@Component({
  selector: 'app-grade-cards-secondary',
  standalone: true,
  imports: [
    NgForOf,
    GradeCardComponent,
    BreadcrumbComponent
  ],
  templateUrl: './grade-cards-secondary.component.html',
  styleUrls: ['./grade-cards-secondary.component.scss']
})
export class GradeCardsSecondaryComponent {

    breadcrumbTitle = 'Grados del Nivel Secundario';
    breadcrumbPaths = ['Secundaria'];

    constructor(private router: Router) {
    }

    goToGrade(grade: number) {
      this.router.navigate(['/students/secondary', grade]);
    }

    grades = Array.from({ length: 5 }, (_, i) => ({
      badgeLabel: 'Secundaria',
      imageUrl: `https://i.ibb.co/${['zT6cMjXd/1erA', 'LDWDH5dT/2doA', 'NgJbKzjB/3erA', 'JWRrCs1w/4toA', 'NgV7k6LS/5toA'
      ][i]}.png`,
      title: `${i + 1}er Año`.replace('1er', '1er').replace('2er', '2do').replace('3er', '3er').replace('4er', '4to').replace('5er', '5to'),
      description: `Adolescentes de ${12 + i} a ${13 + i} años`,
      grade: i + 1
    }));

}
