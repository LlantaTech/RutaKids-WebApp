import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";
import {MatSelect} from "@angular/material/select";
import {SchoolRoutesSelectorComponent} from "./school-routes-selector/school-routes-selector.component";
import {SchoolRoutesTableComponent} from "./school-routes-table/school-routes-table.component";

@Component({
  selector: 'app-school-routes-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    AsyncPipe,
    MatSelect,
    SchoolRoutesSelectorComponent,
    SchoolRoutesTableComponent
  ],
  templateUrl: './school-routes-form.component.html',
  styleUrl: './school-routes-form.component.scss'
})


export class SchoolRoutesFormComponent {



}
