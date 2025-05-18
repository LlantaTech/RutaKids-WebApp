import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";

import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-comic-soon',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule],
  templateUrl: './comic-soon.component.html',
  styleUrls: ['./comic-soon.component.scss']
})
export class ComicSoonComponent implements OnInit, OnDestroy {

    private isBrowser: boolean;
    private countdownInterval: any;
    public countdown: { days: number, hours: number, minutes: number, seconds: number };

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit(): void {
        // Set your target date and time for the countdown
        const targetDate = new Date('2025-12-31T23:59:59').getTime();

        // Update the countdown every second
        this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            this.countdown.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.countdown.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdown.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.countdown.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        } else {
            // Countdown has ended, do something here
            this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            clearInterval(this.countdownInterval);
        }
        }, 1000);
    }

    ngOnDestroy(): void {
        // Clear the interval to prevent memory leaks
        clearInterval(this.countdownInterval);
    }

    // RTL Mode
    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
}
