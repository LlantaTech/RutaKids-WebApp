import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class StorageRef {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get localStorage(): Storage | undefined {
    return isPlatformBrowser(this.platformId) ? window.localStorage : undefined;
  }
}
