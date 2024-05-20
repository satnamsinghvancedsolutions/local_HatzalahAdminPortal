import { Injectable } from '@angular/core';
import { GridActionsService } from './grid-actions.service';
import { GridApi, GridOptions } from '@ag-grid-community/core';
import { GridApiService } from './grid-api.service';
import { ActionsCellRendererComponent } from '../ag-grid-components/actions-cell-renderer/actions-cell-renderer.component';

@Injectable({
  providedIn: 'root'
})
export class HospitalGridConfigService {
  gridApi!: GridApi
  isOpened: boolean = false;
  constructor(
    private gridApiService: GridApiService,
    private gridActionsService: GridActionsService
  ) {
    this.gridApiService.gridApi$.subscribe((e: GridOptions) => {
      if (e && e.api) {
        this.gridApi = e.api;
      }
    });
  }

  columnDefs = [
    {
      headerName: 'Name',
      field: 'hospitalName',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
      minWidth: 120
    },

    {
      headerName: 'Address',
      field: 'address',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true
    },

    {
      headerName: 'City',
      field: 'city',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true
    },
    {
      headerName: "State",
      field: 'state',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true
    },
    {
      headerName: "Zip",
      field: 'zip',
      filter: 'agNumberColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: "FacilityType",
      field: 'facilityType',
      filter: 'agTextColumnFilter',
      minWidth: 50,
      floatingFilter: true,
      sortable: true
    },
    {
      headerName: "DispositionCode",
      field: 'dispositionCode',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: "CityCode",
      field: 'cityCode',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,

    },
    {
      headerName: 'MainPhone',
      field: 'mainPhone',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true
    },
    {
      headerName: "ERPhone",
      field: 'erPhone',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true
    },
    {
      headerName: "ERFax",
      field: 'erFax',
      filter: 'agNumberColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: "PedsERFax",
      field: "pedsERFax" ,
      filter: 'agTextColumnFilter',
      minWidth: 100,
      floatingFilter: true,
      sortable: true
    },
    {
      headerName: "LD",
      field: 'ld',
     filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,
    },
    {
      headerName: "Latitude",
      field: 'latitude',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,

    },
    {
      headerName: "Longitude",
      field: 'longitude',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,

    },
    {
      headerName: "Nickname",
      field: 'nickname',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,

    },
    {
      headerName: "RowNumber",
      field: 'rowNumber',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      sortable: true,

    },
    

  ]
  components = {

    actionsCellRendererComponent: ActionsCellRendererComponent,
  }
  gridOptions: GridOptions = {
    rowModelType: "serverSide",
    blockLoadDebounceMillis: 1,
    serverSideStoreType: "partial",
    tooltipShowDelay: 800,
    suppressCopyRowsToClipboard: true,
    maxBlocksInCache: 2,

    defaultColDef: {
      resizable: true,
      filterParams: {
        suppressAndOrCondition: true,
      },
      menuTabs: ["filterMenuTab"],
      tooltipComponent: "customHeaderTooltipComponent",
    },
    components: this.components,
    statusBar: {
      statusPanels: [
        { statusPanel: "statusBarRendererComponent", align: "left" },
      ],
    },
    rowHeight: 40,
    headerHeight: 28,
    rowSelection: "single",
    suppressRowClickSelection: false,
    loadingCellRenderer: "loadingCellRenderer",
    cacheBlockSize: 100,
    pivotPanelShow: "onlyWhenPivoting",
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
     onCellClicked:(e: any)=>{
      if(e.column.colId == '0' || e.column.colId == "isDispatcher" ||
       e.column.colId == 'isNsUnit' || e.column.colId == 'isBus' || e.column.colId == 'isBase'){
        e.api.deselectAll();
      }
    },
    }


}
