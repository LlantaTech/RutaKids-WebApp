import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../../shared/services/customizer-settings/customizer-settings.service';
import { StudentService } from '../../../../students/shared/services/student.service';
import {PlatformService} from "../../../../shared/services/platform/platform.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-total-projects',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './total-projects.component.html',
  styleUrls: ['./total-projects.component.scss']
})
export class TotalProjectsComponent implements OnInit {
  totalStudents: number = 0;
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService,
    private studentService: StudentService,
    public platform: PlatformService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  ngOnInit() {
    if (this.platform.isBrowser) {
      this.studentService.getAll().subscribe((students) => {
        this.totalStudents = students.length;
      });
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
