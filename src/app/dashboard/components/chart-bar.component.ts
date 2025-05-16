// chart-bar.component.ts
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexGrid,
  ApexYAxis
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

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
  selector: 'app-chart-bar',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <apx-chart
      [series]="options.series"
      [chart]="options.chart"
      [colors]="options.colors"
      [grid]="options.grid"
      [yaxis]="options.yaxis"
      [dataLabels]="options.dataLabels"
      [plotOptions]="options.plotOptions"
      [xaxis]="options.xaxis"
    ></apx-chart>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ChartBarComponent {
  @Input() options!: ChartOptions;
}
