import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";

declare let $: any;
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';

import {isPlatformBrowser} from "@angular/common";
import {PLATFORM_ID, Inject } from "@angular/core";

import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterOutlet, Router, NavigationCancel, NavigationEnd, RouterLink } from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {ToggleService} from "./shared/components/sidebar/toggle.service";
import {CustomizerSettingsService} from "./shared/services/customizer-settings/customizer-settings.service";
import {CustomizerSettingsComponent} from "./shared/components/customizer-settings/customizer-settings.component";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent, FooterComponent, RouterLink, CustomizerSettingsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})

export class AppComponent {
    isBrowser: boolean;

    title = 'LlantaTech - RutaKids';
    routerSubscription: any;
    location: any;

    // isSidebarToggled
    isSidebarToggled = false;

    // isToggled
    isToggled = false;

    constructor(
        public router: Router,
        private toggleService: ToggleService,
        public themeService: CustomizerSettingsService,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);

        this.toggleService.isSidebarToggled$.subscribe(isSidebarToggled => {
            this.isSidebarToggled = isSidebarToggled;
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    isLoginPage() {
        return this.router.url.startsWith('/authentication');
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

            if (!(event instanceof NavigationEnd)) return;

            if(this.isBrowser) {
              window.scrollTo(0, 0);
            }
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
