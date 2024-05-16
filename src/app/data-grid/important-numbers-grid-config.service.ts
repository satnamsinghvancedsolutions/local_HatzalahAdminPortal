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
      debugger
      if (e.api) {
        this.gridApi = e.api;
      }
    });
  }

  columnDefs: any[] = [
    {
      headerName: 'First Name',
      field: 'firstName',
      checkboxSelection: true,
      filter: 'agTextColumnFilter',
      minWidth: 160,
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Last Name',
      field: 'lastName',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Street',
      field: 'street',
      minWidth: 290,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'City',
      field: 'city',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'State',
      field: 'state',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Zip',
      field: 'zip',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Address',
      field: 'address',
      minWidth: 380,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Email',
      field: 'mailAddress',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Organization Name',
      field: 'organizationName',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Organization Title',
      field: 'organizationTitle',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Notes',
      field: 'notes',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Home',
      field: 'home',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Work 1',
      field: 'work1',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Work 2',
      field: 'work2',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Mobile 1',
      field: 'mobile1',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Mobile 2',
      field: 'mobile2',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Other',
      field: 'other',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Contact First Name',
      field: 'contactFirstName',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Contact Last Name',
      field: 'contactLastName',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Contact Street',
      field: 'contactStreet',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Contact Apt',
      field: 'contactApt',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: 'Contact Phone',
      field: 'contactPhone',
      minWidth: 120,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
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
