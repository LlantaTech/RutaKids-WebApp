import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import {isPlatformBrowser, NgIf} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  NgApexchartsModule,
  ApexGrid,
  ApexYAxis
} from 'ng-apexcharts';

import { StudentService } from '../../../students/shared/services/student.service';
import { Student } from '../../../students/model/student';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  colors: string[];
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
};

@Component({
  selector: 'app-projects-roadmap:not(p)',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule, NgIf],
  templateUrl: './projects-roadmap.component.html',
  styleUrls: ['./projects-roadmap.component.scss']
})
export class ProjectsRoadmapComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  constructor(
    private studentService: StudentService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
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
            labels: { show: true, style: { colors: '#919aa3', fontSize: '14px' } }
          },
          yaxis: {
            labels: { show: true, style: { colors: '#919aa3', fontSize: '14px' } },
            axisBorder: { show: true, color: '#e0e0e0' },
            axisTicks: { show: false, color: '#e0e0e0' }
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
