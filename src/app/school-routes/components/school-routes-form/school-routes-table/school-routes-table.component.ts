import {Component, ViewChild} from '@angular/core';
import {CustomizerSettingsService} from "../../../../shared/services/customizer-settings/customizer-settings.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export interface ConductorElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Alumno', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Alumno', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Alumno', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Alumno', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Alumno', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Alumno', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Alumno', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Alumno', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Alumno', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Alumno', weight: 20.1797, symbol: 'Ne'},
];

const Conductor: ConductorElement[] = [
    {position: 1, name: 'Condcutro', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-school-routes-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './school-routes-table.component.html',
  styleUrl: './school-routes-table.component.scss'
})
export class SchoolRoutesTableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];
  conductorDataSource = [...Conductor];

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
        this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
        this.table.renderRows();
  }

  removeData() {
        this.dataSource.pop();
        this.table.renderRows();
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
