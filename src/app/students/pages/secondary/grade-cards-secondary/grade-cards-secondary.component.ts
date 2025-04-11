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
      description: 'Niños de 12 a 13 años',
      buttonLabel: 'Ver sección'
    },
  ];
}
