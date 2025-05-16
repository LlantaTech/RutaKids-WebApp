import {
  Component,
  OnInit,
  inject,
  PLATFORM_ID,
  Injector
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { StudentService } from '../../../students/shared/services/student.service';
import { Student } from '../../../students/model/student';

@Component({
  selector: 'app-projects-roadmap',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatMenuModule, MatButtonModule],
  templateUrl: './projects-roadmap.component.html',
  styleUrls: ['./projects-roadmap.component.scss']
})
export class ProjectsRoadmapComponent implements OnInit {
  chartOptions: any;
  chartComponent: any = null;
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  protected injector = inject(Injector);

  constructor(private studentService: StudentService) {}

  async ngOnInit() {
    if (this.isBrowser) {
      const module = await import('../../components/lazy-apex-chart.component');
      this.chartComponent = module.LazyApexChartComponent;

      this.studentService.getAll().subscribe((students: Student[]) => {
        const movilidadPorGrado: { [key: string]: number } = {};
        students.forEach(student => {
          if (student.hasMobility) {
            const gradoLabel = `${student.level} - ${student.grade}°`;
            movilidadPorGrado[gradoLabel] = (movilidadPorGrado[gradoLabel] || 0) + 1;
          }
        });

        const categories = Object.keys(movilidadPorGrado);
        const data = Object.values(movilidadPorGrado);

        this.chartOptions = {
          series: [{ name: 'Alumnos con Movilidad', data }],
          chart: { type: 'bar', toolbar: { show: false } },
          colors: ['#796df6'],
          plotOptions: { bar: { horizontal: true } },
          dataLabels: { enabled: true, style: { fontSize: '14px' } },
          xaxis: {
            categories,
            axisBorder: { show: true, color: '#e0e0e0' },
            axisTicks: { show: true, color: '#e0e0e0' },
            labels: { style: { colors: '#919aa3', fontSize: '14px' } }
          },
          yaxis: {
            labels: { style: { colors: '#919aa3', fontSize: '14px' } },
            axisBorder: { show: true, color: '#e0e0e0' },
            axisTicks: { show: false }
          },
          grid: {
            strokeDashArray: 5,
            borderColor: '#f4f6fc',
            row: { colors: ['#f4f6fc', 'transparent'], opacity: 0.5 }
          }
        };
      });
    }
  }
}
