// dashboard/components/chart-donut.component.ts
import { Component, Input } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexResponsive,
  ApexTooltip,
  NgApexchartsModule
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive?: ApexResponsive[];
  labels: string[];
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-chart-donut',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <apx-chart
      [series]="options.series"
      [chart]="options.chart"
      [dataLabels]="options.dataLabels"
      [legend]="options.legend"
      [responsive]="options.responsive || []"
      [labels]="options.labels"
      [tooltip]="options.tooltip"
      [colors]="options.colors"
    ></apx-chart>
  `
})
export class ChartDonutComponent {
  @Input() options!: DonutChartOptions;
}
