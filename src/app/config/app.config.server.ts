import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { provideNoopAnimations} from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment.prod';
import { routes } from '../app.routes';
import { API_URL } from '../core/tokens/api-url.token';

export const appConfigServer: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideNoopAnimations(),
    { provide: API_URL, useValue: environment.apiUrl }
  ]

};
