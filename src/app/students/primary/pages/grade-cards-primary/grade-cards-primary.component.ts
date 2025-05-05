import { Component } from '@angular/core';
import {NgForOf, } from "@angular/common";
import {Router} from "@angular/router";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";
import {GradeCardComponent} from "../../../shared/components/grade-card/grade-card.component";

@Component({
  selector: 'app-grade-cards-primary',
  standalone: true,
  imports: [
    GradeCardComponent,
    NgForOf,
    BreadcrumbComponent
  ],
  templateUrl: './grade-cards-primary.component.html',
  styleUrls: ['./grade-cards-primary.component.scss']
})
export class GradeCardsPrimaryComponent {

  breadcrumbTitle = 'Grados del Nivel Primario';
  breadcrumbPaths = ['Primaria'];

  constructor(private router: Router) {
  }

  goToGrade(grade: number) {
    this.router.navigate(['/students/primary', grade]);
  }

  grades = Array.from({ length: 6 }, (_, i) => ({
    badgeLabel: 'Primaria',
    imageUrl: `https://i.ibb.co/${['cKVzkFkV/1er', 'sSxF5f0/2do', '60wPTRzn/3er', 'LdjPxbwK/4to', 'R4j7qsLw/5to', 'XZNP9sry/6to'][i]}.png`,
    title: `${i + 1}er Grado`.replace('1er', '1er').replace('2er', '2do').replace('3er', '3er').replace('4er', '4to').replace('5er', '5to').replace('6er', '6to'),
    description: `Niños de ${6 + i} a ${7 + i} años`,
    grade: i + 1
  }));

}

