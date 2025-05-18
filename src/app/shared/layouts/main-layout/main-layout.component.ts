import {SidebarComponent} from "../../components/sidebar/sidebar.component";
declare let $: any;
import {Component, Inject, PLATFORM_ID} from '@angular/core';
import { filter } from 'rxjs/operators';
import {CommonModule, isPlatformBrowser, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { RouterOutlet, Router, NavigationCancel, NavigationEnd, RouterLink } from '@angular/router';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {CustomizerSettingsComponent} from "../../components/customizer-settings/customizer-settings.component";
import {CustomizerSettingsService} from "../../services/customizer-settings/customizer-settings.service";
import {ToggleService} from "../../components/sidebar/toggle.service";
import {GlobalAlertComponent} from "../../components/global-alert/global-alert.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent, FooterComponent, RouterLink, CustomizerSettingsComponent, GlobalAlertComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class MainLayoutComponent {
    // title
    title = 'RutaKis - LlantaTech';

    // routerSubscription
    routerSubscription: any;

    // location
    location: any;

    // isBrowser
    isBrowser: boolean;

    // isSidebarToggled
    isSidebarToggled = false;

    // isToggled
    isToggled = false;

    constructor(
        public router: Router,
        private toggleService: ToggleService,
        public themeService: CustomizerSettingsService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);

        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // ngOnInit
    ngOnInit(){
        this.recallJsFuntions();
    }

    // recallJsFuntions
    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    // Dark Mode
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // Sidebar Dark
    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    // Right Sidebar
    toggleRightSidebarTheme() {
        this.themeService.toggleRightSidebarTheme();
    }

    // Hide Sidebar
    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    // Header Dark Mode
    toggleHeaderTheme() {
        this.themeService.toggleHeaderTheme();
    }

    // Card Border
    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    // Card Border Radius
    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}
