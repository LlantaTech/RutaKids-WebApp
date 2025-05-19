import {Component, OnInit} from '@angular/core';
import {StudentFormComponent} from "../../../shared/components/sudent-form/student-form.component";
import {BreadcrumbComponent} from "../../../../shared/components/breadcrumb/breadcrumb.component";
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {SchoolTransportationService} from "../../../../school-transportation/services/school-transportation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../../model/student";

@Component({
  selector: 'app-create-primary',
  standalone: true,
  imports: [
    StudentFormComponent,
    BreadcrumbComponent
  ],
  templateUrl: './create-primary.component.html',
  styleUrls: ['./create-primary.component.scss']
})
export class CreatePrimaryComponent implements OnInit {

    breadcrumbTitle = 'Crear Estudiante Nivel Primario';
    breadcrumbPaths = ['Primaria', 'Grado', 'Crear Estudiante'];

    grade!: number;
    level!: string;

    ngOnInit(): void {
      this.level = 'Primaria'
      this.grade = Number(this.route.snapshot.paramMap.get('grade') || 0);
    }

    student: Student = {
      dni: '',
      firstName: '',
      paternalLastName: '',
      maternalLastName: '',
      level: '',
      grade: 0,
      email: '',
      phone: '',
      address: '',
      coordinates: [],
      hasMobility: false,
      parents: [
        {
          type: '',
          dni: '',
          firstName: '',
          paternalLastName: '',
          maternalLastName: '',
          email: '',
          phone: '',
          address: '',
          district: '',
        },
        {
          type: '',
          dni: '',
          firstName: '',
          paternalLastName: '',
          maternalLastName: '',
          email: '',
          phone: '',
          address: '',
          district: '',
        }
      ]
    };

    onSubmit() {
      // lógica para guardar
    }

    onCancel() {
      // lógica para cancelar
    }

    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private schoolTransportationService: SchoolTransportationService,
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
