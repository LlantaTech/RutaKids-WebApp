import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DocumentRef {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get nativeDocument(): Document | undefined {
    return isPlatformBrowser(this.platformId) ? document : undefined;
  }
}
