import {
  Component,
  Input,
  OnInit,
  Inject,
  PLATFORM_ID,
  EnvironmentInjector
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-apex-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="component">
      <ng-container *ngComponentOutlet="component; injector: injector" />
    </ng-container>
  `
})
export class LazyApexChartComponent implements OnInit {
  @Input() injector!: EnvironmentInjector;
  @Input() chartLoader!: () => Promise<any>;

  component: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const mod = await this.chartLoader();
      this.component = mod.default || Object.values(mod)[0];
    }
  }
}
