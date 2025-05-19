import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import {isPlatformBrowser, NgIf} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTooltip,
  ChartComponent,
  NgApexchartsModule
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  labels: any;
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-projects-progress:not(p)',
  standalone: true,
  imports: [
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    NgApexchartsModule,
    NgIf
  ],
  templateUrl: './projects-progress.component.html',
  styleUrls: ['./projects-progress.component.scss']
})
export class ProjectsProgressComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.chartOptions = {
        series: [60, 30, 10],
        chart: {
          height: 450,
          type: 'donut'
        },
        labels: ['In Progress', 'Not Started', 'Completed'],
        legend: {
          offsetY: 11,
          fontSize: '14px',
          position: 'bottom',
          horizontalAlign: 'center',
          labels: {
            colors: '#919aa3'
          },
          itemMargin: {
            horizontal: 12,
            vertical: 7
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '14px'
          },
          dropShadow: {
            enabled: false
          }
        },
        colors: ['#00cae3', '#0e7aee', '#796df6'],
        tooltip: {
          y: {
            formatter: function (val: number) {
              return val + '%';
            }
          }
        }
      };
    }
  }
}
