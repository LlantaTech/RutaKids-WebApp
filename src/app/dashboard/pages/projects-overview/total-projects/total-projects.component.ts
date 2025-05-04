import {Component, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {StudentService} from "../../../../students/services/student.service";

@Component({
    selector: 'app-total-projects',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './total-projects.component.html',
    styleUrls: ['./total-projects.component.scss']
})
export class TotalProjectsComponent implements OnInit {
    // Variables
    totalStudents: number = 0;

    ngOnInit() {
      this.studentService.getAll().subscribe((students) =>{
        this.totalStudents = students.length;
      })
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private studentService: StudentService,
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
