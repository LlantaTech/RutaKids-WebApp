import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatSelect} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {MatButton} from "@angular/material/button";
import {SchoolTransportation} from "../../../../school-transportation/model/school-transportation";

@Component({
  selector: 'app-school-routes-selector-school-transportation',
  standalone: true,
  imports: [
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    MatButton,
    NgForOf
  ],
  templateUrl: './school-routes-selector-school-transportation.component.html',
  styleUrl: './school-routes-selector-school-transportation.component.scss'
})
export class SchoolRoutesSelectorSchoolTransportationComponent implements OnInit, OnChanges {

  @Input() options: SchoolTransportation[] = [];
  @Output() selectedTransportation = new EventEmitter<SchoolTransportation>();

  myControl = new FormControl<SchoolTransportation | null>(null);
  filteredOptions: Observable<SchoolTransportation[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const input = typeof value === 'string' ? value : '';
        return this._filter(input);
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && this.options.length > 0) {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const input = typeof value === 'string' ? value : '';
          return this._filter(input);
        })
      );
    }
  }

  displayFn(option: SchoolTransportation): string {
    return option ? `${option.firstName} ${option.paternalLastName} ${option.paternalLastName} - ${option.vehiclePlate}` : '';
  }

  private _filter(value: string): SchoolTransportation[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      (`${option.firstName} ${option.paternalLastName} ${option.maternalLastName}`.toLowerCase().includes(filterValue)) ||
      option.vehiclePlate.toLowerCase().includes(filterValue)
    );
  }

  onAddTransportation() {
    const selected = this.myControl.value;
    if (selected) {
      this.selectedTransportation.emit(selected);
      this.myControl.reset(); // opcional
    }
  }

  // isToggled
  isToggled = false;

  constructor(
    public themeService: CustomizerSettingsService
  ) {
    this.themeService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
    });
  }

  // RTL Mode
  toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
  }

}
