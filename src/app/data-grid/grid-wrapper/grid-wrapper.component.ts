import { Component, Input } from '@angular/core';
import { GridApi, Module, ModuleRegistry } from '@ag-grid-community/core';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { MultiFilterModule } from '@ag-grid-enterprise/multi-filter';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
ModuleRegistry.registerModules([
  ServerSideRowModelModule,
  ClientSideRowModelModule,
  ClipboardModule,
  MenuModule,
  RangeSelectionModule,
  SetFilterModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  MasterDetailModule,
  RichSelectModule,
  RowGroupingModule,
  MultiFilterModule,
 // ExcelExportModule,
]);
@Component({
  selector: 'app-grid-wrapper',
  templateUrl: './grid-wrapper.component.html',
  styleUrls: ['./grid-wrapper.component.scss'],
})
export class GridWrapperComponent {
  @Input() gridOptions: any;
  @Input() columnDefs: any;
  @Input() module: any;
  modules: Module[] = [ClientSideRowModelModule];
  @Input() overlayNoRowsTemplate: any;
  gridApi!: GridApi;
  rowModelType: any;
  rowData: any[] = [];

  constructor() {}

  selectedDate(event: any) {
    // this.selectedDateEmitter.emit(event);
  }

  searchedText(event: any) {
    // this.searchText.emit(event)
  }

  onGridReady(event: any) {
    // this.gridReady.emit(event)
  }
}
