import {Component, OnInit, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {SelectionModel} from "@angular/cdk/collections";
import {CustomizerSettingsService} from "../../../shared/services/customizer-settings/customizer-settings.service";
import {MatMenuModule} from "@angular/material/menu";
import {SchoolTransportation} from "../../model/school-transportation";
import {SchoolTransportationService} from "../../services/school-transportation.service";
import {MatIcon} from "@angular/material/icon";
import {BreadcrumbComponent} from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-school-transportation-list',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink, MatTableModule, MatPaginatorModule, NgIf, MatCheckboxModule, MatTooltipModule, MatIcon, BreadcrumbComponent],
  templateUrl: './school-transportation-list.component.html',
  styleUrls: ['./school-transportation-list.component.scss']
})
export class SchoolTransportationListComponent implements OnInit {

  breadcrumbTitle = 'Lista de Movilidades';
  breadcrumbPaths = ['Movilidades', 'Lista'];

  displayedColumns: string[] = [
      'select',
      'licenseCode',
      'fullName',
      'phone',
      'vehiclePlate',
      'vehicleBrand',
      'vehicleModel',
      'vehicleColor',
      'action'
    ];
    dataSource = new MatTableDataSource<SchoolTransportation>([]);
    selection = new SelectionModel<SchoolTransportation>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;


    onDelete(element: SchoolTransportation): void {
      this.service.delete(element.id!).subscribe(() => this.ngOnInit());
    }

    onEdit(element: SchoolTransportation): void {
      this.router.navigate(['/school-transportation/edit', element.id]);
    }

    ngOnInit(): void {
      this.service.getAll().subscribe(data => {
        this.dataSource.data = data.map(item => ({
          ...item,
          action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
          }
        }));
        this.dataSource.filterPredicate = (data: SchoolTransportation, filter: string) => {
          const fullName = `${data.firstName} ${data.paternalLastName} ${data.maternalLastName}`.toLowerCase();
          return (
            fullName.includes(filter.trim().toLowerCase()));
        };

        this.dataSource.paginator = this.paginator;
      });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: SchoolTransportation): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.firstName + 1}`;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // isToggled
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private service: SchoolTransportationService,
        private router: Router
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
