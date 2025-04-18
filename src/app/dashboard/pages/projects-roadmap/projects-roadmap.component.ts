import {Component, OnInit, ViewChild} from '@angular/core';
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
} from "ng-apexcharts";
import {MatDatepicker} from "@angular/material/datepicker";
import {StudentService} from "../../../students/services/student.service";
import {Student} from "../../../students/model/student";

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
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatDatepicker, NgApexchartsModule],
    templateUrl: './projects-roadmap.component.html',
    styleUrl: './projects-roadmap.component.scss'
})
export class ProjectsRoadmapComponent implements OnInit {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(private studentService: StudentService,) {
    }

    ngOnInit() {
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
          series: [
            {
              name: "Alumnos con Movilidad",
              data: data
            }
          ],
          chart: {
            type: "bar",
            toolbar: {
              show: false
            }
          },
          colors: [
            "#796df6"
          ],
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '14px'
            }
          },
          xaxis: {
            categories: [
              "Primaria 1°", "Primaria 2°", "Primaria 3°", "Primaria 4°", "Primaria 5°", "Primaria 6°",
              "Secundaria 1°", "Secundaria 2°", "Secundaria 3°", "Secundaria 4°", "Secundaria 5°"
            ],
            axisBorder: {
              show: true,
              color: '#e0e0e0'
            },
            axisTicks: {
              show: true,
              color: '#e0e0e0'
            },
            labels: {
              show: true,
              style: {
                colors: "#919aa3",
                fontSize: "14px"
              }
            }
          },
          yaxis: {
            labels: {
              show: true,
              style: {
                colors: "#919aa3",
                fontSize: "14px"
              }
            },
            axisBorder: {
              show: true,
              color: '#e0e0e0'
            },
            axisTicks: {
              show: false,
              color: '#e0e0e0'
            }
          },
          grid: {
            strokeDashArray: 5,
            borderColor: "#f4f6fc",
            row: {
              colors: ["#f4f6fc", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          }
        };
      });
    }
}
