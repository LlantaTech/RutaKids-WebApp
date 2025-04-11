import { Component } from '@angular/core';
import {GradeCardComponent} from "../../../components/grade-card/grade-card.component";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-grade-cards-primary',
  standalone: true,
  imports: [
    GradeCardComponent,
    NgForOf,
    RouterLink,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './grade-cards-primary.component.html',
  styleUrl: './grade-cards-primary.component.scss'
})
export class GradeCardsPrimaryComponent {

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
      badgeLabel: 'Primaria',
      imageUrl: 'assets/images/cards/card1.jpg',
      title: '1er Grado',
      description: 'Niños de 6 a 7 años'
    },
  ];
}

