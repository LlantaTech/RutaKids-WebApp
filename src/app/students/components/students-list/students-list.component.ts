import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatTooltip} from "@angular/material/tooltip";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {SelectionModel} from "@angular/cdk/collections";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {Student} from "../../model/student";
import {StudentService} from "../../services/student.service";
import {MatCheckbox} from "@angular/material/checkbox";

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
    MatTable,
    MatCardContent,
    MatCardHeader,
    MatCard,
    MatRowDef,
    MatButton,
    MatCardSubtitle,
    MatCardTitle,
    MatCheckbox
  ],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent{
    @Input() dataSource = new MatTableDataSource<Student>([]);
    @Input() addLink: string = '';
    @Output() deleteClicked = new EventEmitter<Student>();
    @Output() editClicked = new EventEmitter<Student>();

    displayedColumns: string[] = [
      'select',
      'dni',
      'fullName',
      'level',
      'grade',
      'address',
      'district',
      'action'
    ];

    selection = new SelectionModel<Student>(true, []);
    @ViewChild(MatPaginator) paginator: MatPaginator;


    ngAfterViewInit() {
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      this.dataSource.filterPredicate = (data: Student, filter: string) => {
        const fullName = `${data.firstName} ${data.paternalLastName} ${data.maternalLastName}`.toLowerCase();
        return(
          fullName.includes(filter.trim().toLowerCase())
        );
      };
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

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private router: Router,
        private route: ActivatedRoute,
        private service: StudentService
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
