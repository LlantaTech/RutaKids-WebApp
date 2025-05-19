import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../../shared/services/customizer-settings/customizer-settings.service';
import { SchoolTransportationService } from '../../../../school-transportation/services/school-transportation.service';
import {PlatformService} from "../../../../shared/services/platform/platform.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-active-projects',
  standalone: true,
  imports: [MatCardModule, RouterLink, NgOptimizedImage],
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.scss']
})
export class ActiveProjectsComponent implements OnInit {

  totalSchoolTransportation = 0;
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService,
    private schoolTransportationService: SchoolTransportationService,
    public platform: PlatformService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  ngOnInit() {
    if (this.platform.isBrowser) {
      this.schoolTransportationService.getAll().subscribe((schoolTransportation) => {
        this.totalSchoolTransportation = schoolTransportation.length;
      });
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
