import {Component, Input, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatTooltip} from "@angular/material/tooltip";
import {NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {SelectionModel} from "@angular/cdk/collections";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatNoDataRow,
    MatPaginator,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatAnchor,
    RouterLink,
    MatHeaderCellDef,
    MatColumnDef,
    MatTooltip,
    NgIf,
    MatTable,
    MatCardContent,
    MatCardHeader,
    MatCheckbox,
    MatCard,
    MatRowDef,
    MatButton,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent {

    @Input() createLink: string = '';
    @Input() editLinkBase: string = '';

    displayedColumns: string[] = ['select', 'id', 'name', 'email', 'grade', 'status', 'action'];
    dataSource = new MatTableDataSource<any>();
    selection = new SelectionModel<any>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit(): void {
      // Dummy data temporal
      this.dataSource.data = [
        {
          id: 'S001',
          name: 'María Pérez',
          img: 'assets/images/users/user-1.png',
          email: 'maria@example.com',
          grade: '1st Grade',
          status: 'active'
        },
        {
          id: 'S002',
          name: 'Luis Gómez',
          img: 'assets/images/users/user-2.png',
          email: 'luis@example.com',
          grade: '2nd Grade',
          status: 'inactive'
        }
      ];
    }

    ngAfterViewInit() {
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
      this.dataSource.filter = filterValue;
    }

    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    toggleAllRows() {
      this.isAllSelected()
        ? this.selection.clear()
        : this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: any): string {
      return row ? `${this.selection.isSelected(row) ? 'deselect' : 'select'} row` : 'select all';
    }

    deleteStudent(id: string) {
      // Temporal: solo elimina del array local
      this.dataSource.data = this.dataSource.data.filter(student => student.id !== id);
      // Aquí luego va la llamada real al servicio de eliminación
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
