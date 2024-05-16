import { GridOptions, IServerSideDatasource } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GridApiService } from 'src/app/data-grid/grid-api.service';
import { ImportantNumbersGridConfigService } from 'src/app/data-grid/important-numbers-grid-config.service';

@Component({
  selector: 'app-important-numbers',
  templateUrl: './important-numbers.component.html',
  styleUrls: ['./important-numbers.component.scss']
})
export class ImportantNumbersComponent implements OnInit{
  private destroy$ = new Subject<void>();
  columnDefs: any
  gridOptions: any;
  public gridApi: any;

  constructor(private importantNumbersGridConfigService: ImportantNumbersGridConfigService,
    private gridApiService: GridApiService
  ){debugger
    this.columnDefs = this.importantNumbersGridConfigService.columnDefs;
    this.gridOptions = this.importantNumbersGridConfigService.gridOptions;
  }
  ngOnInit(): void {
    this.gridApiService.gridApi$
    .pipe(takeUntil(this.destroy$))
    .subscribe((e: GridOptions) => {
      debugger
      this.gridApi = e.api;
      this.gridApi.setServerSideDatasource(this.dataSource);
    });
  }

public dataSource: IServerSideDatasource = {
    getRows: (params: any) => {
      //this.gridRequestParams = params.request;
     // params.request.SearchText = this.searchText;
      params.api.sizeColumnsToFit();
      //this.selectPage(this.currentTab);
      // this.apiLink?.subscribe((response: any) => {
      //   if (response) {
      //     if (!response.data.items?.length) {
      //       this.gridApi.showNoRowsOverlay();
      //     } else {
      //       this.gridApi.hideOverlay();
      //     }
          params.success({
            rowData: [],
            rowCount: 0,
          });

      //   }
      // });
    },
  };
  
}
