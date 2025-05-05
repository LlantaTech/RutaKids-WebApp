import {Component, Input} from '@angular/core';
import {MatFormField, MatLabel, MatOption, MatSelect} from "@angular/material/select";
import {ControlValueAccessor, FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-district-field',
  standalone: true,
  imports: [
    MatSelect,
    MatOption,
    MatLabel,
    MatFormField,
    FormsModule,
    NgForOf
  ],
  templateUrl: './district-field.component.html',
  styleUrls: ['./district-field.component.scss']
})
export class DistrictFieldComponent implements ControlValueAccessor {
  @Input() model: any;
  @Input() controlName: string = 'district';
  @Input() themeService: any;

  districts: { value: string; viewValue: string }[] = [
    { value: 'ancon', viewValue: 'Ancon' },
    { value: 'ate', viewValue: 'Ate' },
    { value: 'barranco', viewValue: 'Barranco' },
    { value: 'breña', viewValue: 'Breña' },
    { value: 'carabayllo', viewValue: 'Carabayllo' },
    { value: 'cercado-de-lima', viewValue: 'Cercado De Lima' },
    { value: 'chaclacayo', viewValue: 'Chaclacayo' },
    { value: 'chorrillos', viewValue: 'Chorrillos' },
    { value: 'cieneguilla', viewValue: 'Cieneguilla' },
    { value: 'comas', viewValue: 'Comas' },
    { value: 'el-agustino', viewValue: 'El Agustino' },
    { value: 'independencia', viewValue: 'Independencia' },
    { value: 'jesus-maria', viewValue: 'Jesus Maria' },
    { value: 'la-molina', viewValue: 'La Molina' },
    { value: 'la-victoria', viewValue: 'La Victoria' },
    { value: 'lince', viewValue: 'Lince' },
    { value: 'los-olivos', viewValue: 'Los Olivos' },
    { value: 'lurigancho', viewValue: 'Lurigancho' },
    { value: 'lurin', viewValue: 'Lurin' },
    { value: 'magdalena-del-mar', viewValue: 'Magdalena Del Mar' },
    { value: 'miraflores', viewValue: 'Miraflores' },
    { value: 'pachacamac', viewValue: 'Pachacamac' },
    { value: 'pucusana', viewValue: 'Pucusana' },
    { value: 'pueblo-libre', viewValue: 'Pueblo Libre' },
    { value: 'puente-piedra', viewValue: 'Puente Piedra' },
    { value: 'punta-hermosa', viewValue: 'Punta Hermosa' },
    { value: 'punta-negra', viewValue: 'Punta Negra' },
    { value: 'rimac', viewValue: 'Rimac' },
    { value: 'san-bartolo', viewValue: 'San Bartolo' },
    { value: 'san-borja', viewValue: 'San Borja' },
    { value: 'san-isidro', viewValue: 'San Isidro' },
    { value: 'san-juan-de-lurigancho', viewValue: 'San Juan De Lurigancho' },
    { value: 'san-juan-de-miraflores', viewValue: 'San Juan De Miraflores' },
    { value: 'san-luis', viewValue: 'San Luis' },
    { value: 'san-martin-de-porres', viewValue: 'San Martin De Porres' },
    { value: 'san-miguel', viewValue: 'San Miguel' },
    { value: 'santa-anita', viewValue: 'Santa Anita' },
    { value: 'santa-maria-del-mar', viewValue: 'Santa María Del Mar' },
    { value: 'santa-rosa', viewValue: 'Santa Rosa' },
    { value: 'santiago-de-surco', viewValue: 'Santiago De Surco' },
    { value: 'surquillo', viewValue: 'Surquillo' },
    { value: 'villa-el-salvador', viewValue: 'Villa El Salvador' },
    { value: 'villa-maria-del-triunfo', viewValue: 'Villa Maria Del Triunfo' },
  ];

    value: string = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // opcional
  }

  updateValue(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

}
