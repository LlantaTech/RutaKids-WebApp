import {Component, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {SchoolTransportationService} from "../../../../school-transportation/services/school-transportation.service";

@Component({
    selector: 'app-active-projects',
    standalone: true,
    imports: [MatCardModule, RouterLink],
    templateUrl: './active-projects.component.html',
    styleUrl: './active-projects.component.scss'
})
export class ActiveProjectsComponent implements OnInit {

    // Variables
    totalSchoolTransportation: number = 0;

    ngOnInit() {
      this.schoolTransportationService.getAll().subscribe((schoolTransportation) =>{
        this.totalSchoolTransportation = schoolTransportation.length;
      })
    }

  // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private schoolTransportationService: SchoolTransportationService,
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

}
