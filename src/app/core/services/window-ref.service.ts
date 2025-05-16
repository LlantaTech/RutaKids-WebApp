import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WindowRef {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get nativeWindow(): Window | undefined {
    return isPlatformBrowser(this.platformId) ? window : undefined;
  }
}
