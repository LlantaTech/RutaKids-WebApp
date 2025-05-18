import {Component, OnInit} from '@angular/core';
import {StudentFormComponent} from "../../../shared/components/sudent-form/student-form.component";
import {Student} from "../../../model/student";
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {StudentService} from "../../../shared/services/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-edit-secondary',
  standalone: true,
  imports: [
    StudentFormComponent,
    BreadcrumbComponent
  ],
  templateUrl: './edit-secondary.component.html',
  styleUrls: ['./edit-secondary.component.scss']
})
export class EditSecondaryComponent implements OnInit {
  breadcrumbTitle = 'Editar Alumno Nivel Secundaria';
    breadcrumbPaths = ['Secundaria', 'Grado', 'Editar Alumno'];

    student!: Student;
    grade!: number;
    level!: string;
    leveRoute!: string;

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.level = 'Secundaria';
      this.leveRoute = 'secondary';
      this.grade = Number(this.route.snapshot.paramMap.get('grade') || 0);

      if (id) {
        this.service.getById(id).subscribe((data: Student) => {
          this.student = data;
        });
      }
    }

    onSubmit(): void {
      this.service.update(this.student.id!, this.student).subscribe(() => {
        this.router.navigate(['/students', this.leveRoute.toLowerCase(), this.grade]);
      });
    }

    onCancel(): void {
      console.log(this.level, this.grade);
      this.router.navigate(['/students', this.leveRoute.toLowerCase(), this.grade]);
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private service: StudentService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}
