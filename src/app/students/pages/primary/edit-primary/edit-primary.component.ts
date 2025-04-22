import {Component, OnInit} from '@angular/core';
import {StudentFormComponent} from "../../../components/student-form/student-form.component";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";
import {Student} from "../../../model/student";
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-edit-primary',
  standalone: true,
    imports: [
        StudentFormComponent,
        BreadcrumbComponent
    ],
  templateUrl: './edit-primary.component.html',
  styleUrl: './edit-primary.component.scss'
})
export class EditPrimaryComponent implements OnInit {

    breadcrumbTitle = 'Editar Estudiante Nivel Primario';
    breadcrumbPaths = ['Primaria', 'Grado', 'Editar Estudiante'];

    student!: Student;
    grade!: number;
    level!: string;
    levelRoute!: string;

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.level = 'Primaria';
      this.levelRoute = 'primary';

      this.grade = Number(this.route.snapshot.paramMap.get('grade') || 0);

      if (id) {
        this.service.getById(id).subscribe((data: Student) => {
          this.student = data;
        });
      }
    }

    onSubmit(): void {
      this.service.update(this.student.id!, this.student).subscribe(() => {
        this.router.navigate(['/students', this.levelRoute.toLowerCase(), this.grade]);
      });
    }

    onCancel(): void {
      console.log(this.level, this.grade);
      this.router.navigate(['/students', this.levelRoute.toLowerCase(), this.grade]);
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
