import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, NavigationCancel, NavigationEnd, RouterOutlet, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CustomizerSettingsComponent } from '../../components/customizer-settings/customizer-settings.component';
import { CustomizerSettingsService } from '../../services/customizer-settings/customizer-settings.service';
import { ToggleService } from '../../components/sidebar/toggle.service';
import { GlobalAlertComponent } from '../../components/global-alert/global-alert.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CustomizerSettingsComponent,
    GlobalAlertComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class MainLayoutComponent {
  title = 'RutaKis - LlantaTech';
  routerSubscription: any;
  isBrowser: boolean;
  isSidebarToggled = false;
  isToggled = false;

  constructor(
    public router: Router,
    private toggleService: ToggleService,
    public themeService: CustomizerSettingsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.toggleService.isSidebarToggled$.subscribe(value => {
      this.isSidebarToggled = value;
    });

    this.themeService.isToggled$.subscribe(value => {
      this.isToggled = value;
    });
  }

  ngOnInit() {
    this.recallJsFunctions();
  }

  recallJsFunctions() {
    if (!this.isBrowser) return;

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
  }

  isBlankPage(): boolean {
    if (!this.isBrowser) return false;
    const url = this.router.url;
    return [
      '/authentication',
      '/authentication/sign-up',
      '/authentication/forgot-password',
      '/authentication/reset-password',
      '/authentication/lock-screen',
      '/authentication/logout',
      '/authentication/confirm-email',
      '/coming-soon'
    ].includes(url);
  }

  // Métodos de toggle
  toggleTheme() { this.themeService.toggleTheme(); }
  toggleSidebarTheme() { this.themeService.toggleSidebarTheme(); }
  toggleRightSidebarTheme() { this.themeService.toggleRightSidebarTheme(); }
  toggleHideSidebarTheme() { this.themeService.toggleHideSidebarTheme(); }
  toggleHeaderTheme() { this.themeService.toggleHeaderTheme(); }
  toggleCardBorderTheme() { this.themeService.toggleCardBorderTheme(); }
  toggleCardBorderRadiusTheme() { this.themeService.toggleCardBorderRadiusTheme(); }
  toggleRTLEnabledTheme() { this.themeService.toggleRTLEnabledTheme(); }
}
