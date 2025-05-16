import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser, NgComponentOutlet, NgIf} from '@angular/common';
import {
  DonutChartOptions
} from '../../../dashboard/components/chart-donut.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card"; // asegúrate de importar desde el archivo correcto

@Component({
  selector: 'app-projects-progress:not(p)',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardHeader,
    MatCard,
    MatCardTitle,
    NgIf,
    NgComponentOutlet
  ],
  templateUrl: './projects-progress.component.html',
  styleUrls: ['./projects-progress.component.scss']
})
export class ProjectsProgressComponent {
  chartOptions: DonutChartOptions | null = null;
  isBrowser = false;
  chartComponent: any = null;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngOnInit() {
    if (this.isBrowser) {
      const { ChartDonutComponent } = await import('../../../dashboard/components/chart-donut.component');

      this.chartComponent = ChartDonutComponent;
      this.chartOptions = {
        series: [60, 30, 10],
        chart: {
          height: 450,
          type: "donut"
        },
        labels: ["In Progress", "Not Started", "Completed"],
        legend: {
          offsetY: 11,
          fontSize: "14px",
          position: "bottom",
          horizontalAlign: "center",
          labels: { colors: "#919aa3" },
          itemMargin: { horizontal: 12, vertical: 7 }
        },
        dataLabels: {
          enabled: false,
          style: { fontSize: '14px' },
          dropShadow: { enabled: false }
        },
        colors: ["#00cae3", "#0e7aee", "#796df6"],
        tooltip: {
          y: {
            formatter: (val: number) => `${val}%`
          }
        }
      };
    }
  }
}
