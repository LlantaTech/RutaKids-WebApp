import { SidebarComponent } from "../../components/sidebar/sidebar.component";
declare let $: any;
import {Component, OnDestroy, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { filter } from 'rxjs/operators';
import { CommonModule, Location, LocationStrategy, PathLocationStrategy, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationCancel, NavigationEnd, RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CustomizerSettingsService } from "../../services/customizer-settings/customizer-settings.service";
import { ToggleService } from "../../components/sidebar/toggle.service";
import { GlobalAlertComponent } from "../../components/global-alert/global-alert.component";
import { WindowRef } from "../../../core/services/window-ref.service";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
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
export class MainLayoutComponent implements OnInit, OnDestroy {

  title = 'RutaKis - LlantaTech';
  routerSubscription: any;
  location: any;
  isSidebarToggled = false;
  isToggled = false;

  constructor(
    public router: Router,
    private toggleService: ToggleService,
    public themeService: CustomizerSettingsService,
    private windowRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.toggleService.isSidebarToggled$.subscribe(value => this.isSidebarToggled = value);
    this.themeService.isToggled$.subscribe(value => this.isToggled = value);
  }

  ngOnInit() {
    this.recallJsFunctions();
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

  recallJsFunctions() {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
        this.location = this.router.url;

        if (!(event instanceof NavigationEnd)) return;

        if (isPlatformBrowser(this.platformId)) {
          const win = this.windowRef.nativeWindow;
          win?.scrollTo(0, 0);
        }
      });
  }

  toggleTheme() { this.themeService.toggleTheme(); }
  toggleSidebarTheme() { this.themeService.toggleSidebarTheme(); }
  toggleRightSidebarTheme() { this.themeService.toggleRightSidebarTheme(); }
  toggleHideSidebarTheme() { this.themeService.toggleHideSidebarTheme(); }
  toggleHeaderTheme() { this.themeService.toggleHeaderTheme(); }
  toggleCardBorderTheme() { this.themeService.toggleCardBorderTheme(); }
  toggleCardBorderRadiusTheme() { this.themeService.toggleCardBorderRadiusTheme(); }
  toggleRTLEnabledTheme() { this.themeService.toggleRTLEnabledTheme(); }

}
