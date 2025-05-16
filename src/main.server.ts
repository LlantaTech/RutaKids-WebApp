import 'zone.js/node';
import { AppComponent } from './app/app.component';
import { appConfigServer } from './app/config/app.config.server';
import { bootstrapApplication } from '@angular/platform-browser';

export default () => bootstrapApplication(AppComponent, appConfigServer);
