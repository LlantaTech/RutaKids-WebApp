import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-internal-error',
    standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, NgOptimizedImage],
    templateUrl: './internal-error.component.html',
    styleUrls: ['./internal-error.component.scss']
})
export class InternalErrorComponent {}
