import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {  appConfigServer } from "./app/config/app.config.server";

export default function () {
  return bootstrapApplication(AppComponent, appConfigServer);
}
