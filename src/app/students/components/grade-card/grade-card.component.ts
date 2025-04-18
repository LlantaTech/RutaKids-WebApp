import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-grade-card',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatDividerModule, NgOptimizedImage],
  templateUrl: './grade-card.component.html',
  styleUrl: './grade-card.component.scss'
})
export class GradeCardComponent {
  @Input() badgeLabel: string = '';
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() grade: number = 0;

  @Output() cardClick = new EventEmitter<number>();

  onCardClick() {
    this.cardClick.emit(this.grade);
  }

}
