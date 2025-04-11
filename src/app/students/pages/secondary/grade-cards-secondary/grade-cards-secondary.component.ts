import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {GradeCardComponent} from "../../../components/grade-card/grade-card.component";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-grade-cards-primary',
  standalone: true,
  imports: [
    NgForOf,
    GradeCardComponent,
    NgIf,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './grade-cards-secondary.component.html',
  styleUrl: './grade-cards-secondary.component.scss'
})
export class GradeCardsSecondaryComponent {

  showCards: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(() => {
      // Mostrar cards solo si no hay ruta hija
      this.showCards = this.route.snapshot.firstChild === null;
    });
  }

  grades = [
    {
      badgeLabel: 'Secundaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '1er Grado',
      description: 'Niños de 6 a 7 años',
      navigateTo: '/students/primary/list'
    },
    {
      badgeLabel: 'Secundaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '2do Grado',
      description: 'Niños de 7 a 8 años',
      navigateTo: '/students/primary/list'
    },
    {
      badgeLabel: 'Secundaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '3er Grado',
      description: 'Niños de 7 a 8 años',
      navigateTo: '/students/primary/list'
    },
    {
      badgeLabel: 'Secundaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '4to Grado',
      description: 'Niños de 7 a 8 años',
      navigateTo: '/students/primary/list'
    },
    {
      badgeLabel: 'Secundaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '5to Grado',
      description: 'Niños de 7 a 8 años',
      navigateTo: '/students/primary/list'
    }
  ];
}
