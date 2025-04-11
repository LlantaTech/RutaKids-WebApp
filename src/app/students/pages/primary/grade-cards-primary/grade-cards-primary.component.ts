import { Component } from '@angular/core';
import {GradeCardComponent} from "../../../components/grade-card/grade-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-grade-cards-primary',
  standalone: true,
  imports: [
    GradeCardComponent,
    NgForOf,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './grade-cards-primary.component.html',
  styleUrl: './grade-cards-primary.component.scss'
})
export class GradeCardsPrimaryComponent {

  constructor(private router: Router) {
  }


  grades = [
    {
      badgeLabel: 'Primaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '1er Grado',
      description: 'Niños de 6 a 7 años',
      grade: '1',
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '2do Grado',
      description: 'Niños de 7 a 8 años',
      grade: '2'
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '3er Grado',
      description: 'Niños de 7 a 8 años',
      grade: '3'
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '4to Grado',
      description: 'Niños de 7 a 8 años',
      grade: '4'
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '5to Grado',
      description: 'Niños de 7 a 8 años',
      grade: '5'
    },
    {
      badgeLabel: 'Primaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '6to Grado',
      description: 'Niños de 7 a 8 años',
      grade: '6'
    }
  ];

  goToGrade(grade: string) {
    this.router.navigate(['/students/primary', grade]);
  }
}

