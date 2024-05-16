import { Injectable } from '@angular/core';
import { GridApiService } from './grid-api.service';
import { GridApi, GridOptions } from '@ag-grid-community/core';

@Injectable({
  providedIn: 'root',
})
export class GridActionsService {
  gridOptions!: GridOptions;
  gridApi: GridApi<any> | null = null;
  rowsSelected: any;
  selectedRows: any = [];

  constructor(private gridApiService: GridApiService) {
    this.gridApiService.gridApi$.subscribe((e) => {
      this.gridOptions = e;
      if (this.gridOptions.api) {
        this.gridApi = this.gridOptions.api; // Assign only if api is defined
      }
    });
    this.gridApiService.selectedRows$.subscribe((selectedRows) => {
      this.selectedRows = selectedRows;
    });
  }

  updateSelectedRows(e?: any) {
    this.gridApiService.selectedRows$.next(e);
  }

  deselectAllRow() {
    this.gridApi?.deselectAll();
  }
}
