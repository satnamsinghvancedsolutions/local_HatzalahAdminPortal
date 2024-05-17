import { GridApi, GridOptions } from '@ag-grid-community/core';
import { Injectable } from '@angular/core';
import { GridApiService } from './grid-api.service';
import { GridActionsService } from './grid-actions.service';

@Injectable({
  providedIn: 'root',
})
export class ImportantNumbersGridConfigService {
  gridApi!: GridApi;

  constructor(
    private gridApiService: GridApiService,
    private gridActionsService: GridActionsService
  ) {
    this.gridApiService.gridApi$.subscribe((e: GridOptions) => {
      if (e.api) {
        this.gridApi = e.api;
      }
    });
  }

  columnDefs: any[] = [
    {
      headerName: 'Important Number Name',
      field: 'importantNumberName',
      // checkboxSelection: true,
      filter: 'agTextColumnFilter',
      minWidth: 160,
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Phone Number',
      field: 'phoneNumber',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Category Name',
      field: 'categoryName',
      minWidth: 290,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    }
  ];

  components = {};

  gridOptions: GridOptions = {
    rowModelType: 'serverSide',
    blockLoadDebounceMillis: 1,
    serverSideStoreType: 'partial',
    tooltipShowDelay: 800,
    suppressCopyRowsToClipboard: true,

    defaultColDef: {
      resizable: true,
      filterParams: {
        suppressAndOrCondition: true,
      },
      menuTabs: ['filterMenuTab'],
      tooltipComponent: 'customHeaderTooltipComponent',
    },
    components: this.components,
    statusBar: {
      statusPanels: [
        { statusPanel: 'statusBarRendererComponent', align: 'left' },
      ],
    },
    rowHeight: 40,
    headerHeight: 28,
    rowSelection: 'single',
    suppressRowClickSelection: false,
    loadingCellRenderer: 'loadingCellRenderer',
    cacheBlockSize: 100,
    pivotPanelShow: 'onlyWhenPivoting',
    rowBuffer: 50,
    enableCellChangeFlash: true,
    suppressMenuHide: true,
    icons: {
      menu: '<span class="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>',
      filter:
        '<span class="ag-icon ag-icon-filter" style="display:none;" unselectable="on" role="presentation"></span>',
    },
    onGridReady: (e) => {
      this.gridApiService.gridApi$.next(e);
      e.api.sizeColumnsToFit();
    },
    onRowSelected: (e) => this.gridActionsService.updateSelectedRows(e),
  };
}
