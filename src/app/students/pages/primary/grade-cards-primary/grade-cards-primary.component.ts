import { Component } from '@angular/core';
import {GradeCardComponent} from "../../../components/grade-card/grade-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-grade-cards-primary',
  standalone: true,
  imports: [
    GradeCardComponent,
    NgForOf,
    RouterLink,
    RouterOutlet,
    BreadcrumbComponent
  ],
  templateUrl: './grade-cards-primary.component.html',
  styleUrl: './grade-cards-primary.component.scss'
})
export class GradeCardsPrimaryComponent {

  breadcrumbTitle = 'Grados del Nivel Primario';
  breadcrumbPaths = ['Primaria'];

  constructor(private router: Router) {
  }

  goToGrade(grade: number) {
    this.router.navigate(['/students/primary', grade]);
  }

  grades = [
    {
      badgeLabel: 'Primaria',
      imageUrl: 'https://i.ibb.co/QFcp8B8g/1er.png',
      title: '1er Grado',
      description: 'Niños de 6 a 7 años',
      grade: 1
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'https://i.ibb.co/Cp97wMgq/2do.png',
      title: '2do Grado',
      description: 'Niños de 7 a 8 años',
      grade: 2
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'https://i.ibb.co/SwNvmtmB/3er.png',
      title: '3er Grado',
      description: 'Niños de 7 a 8 años',
      grade: 3
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'https://i.ibb.co/3yYFVJ1q/4to.png',
      title: '4to Grado',
      description: 'Niños de 7 a 8 años',
      grade: 4
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'https://i.ibb.co/hJLxJwBp/5to.png',
      title: '5to Grado',
      description: 'Niños de 7 a 8 años',
      grade: 5
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'https://i.ibb.co/PzrSy3bf/6to.png',
      title: '6to Grado',
      description: 'Niños de 7 a 8 años',
      grade: 6
    }
  ];
}

