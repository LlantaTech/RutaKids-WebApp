import { Component } from '@angular/core';
import {CreateDriverComponent} from "../create-driver/create-driver.component";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {MatAnchor, MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle} from "@angular/material/card";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-driver-cards',
  standalone: true,
  imports: [MatCardModule, CreateDriverComponent, MatAnchor, NgForOf, MatCardContent, MatMenu, MatMenuTrigger, MatCardSubtitle, MatCardHeader, MatCard, RouterLink, MatButton, MatMenuItem],
  templateUrl: './driver-cards.component.html',
  styleUrl: './driver-cards.component.scss'
})
export class DriverCardsComponent {
  drivers: Array<{
    memberImg: string;
    memberName: string;
    designation: string;
    joinedDate: string;
    contactPhone: string;
    location: string;
    socialsLink: Array<{
      icon: string;
      class: string;
      link: string;
    }>;
  }> = [
    {
      memberImg: 'assets/images/users/user1.jpg',
      memberName: 'Sutherland Lee',
      designation: 'Business Analyst',
      joinedDate: '01 Jan, 2023',
      contactPhone: '+1 555-445-4455',
      location: 'Washington D.C',
      socialsLink: [
        {
          icon: 'ri-facebook-fill',
          class: 'facebook',
          link: 'https://www.facebook.com/'
        },
        {
          icon: 'ri-twitter-x-line',
          class: 'twitter',
          link: 'https://twitter.com/'
        },
        {
          icon: 'ri-linkedin-fill',
          class: 'linkedin',
          link: 'https://www.linkedin.com/'
        },
        {
          icon: 'ri-github-line',
          class: 'github',
          link: 'https://github.com/'
        }
      ]
    }
  ];

  constructor(public themeService: CustomizerSettingsService,private router: Router) {}

  addDriver(newDriver: any): void {
    this.drivers.push(newDriver);
  }

  createDriverButton() {
    this.router.navigate(['/drivers/create-driver']);
  }
}

