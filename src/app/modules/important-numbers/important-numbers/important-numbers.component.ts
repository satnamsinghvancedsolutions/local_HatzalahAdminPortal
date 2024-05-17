import { GridOptions, IServerSideDatasource } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GridApiService } from 'src/app/data-grid/grid-api.service';
import { ImportantNumbersGridConfigService } from 'src/app/data-grid/important-numbers-grid-config.service';
import { ImportantNumberService } from 'src/app/services/important-number.service';

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
  searchText = '';

  constructor(private importantNumbersGridConfigService: ImportantNumbersGridConfigService,
    private gridApiService: GridApiService,
    private importantNumberService: ImportantNumberService
  ){
    this.columnDefs = this.importantNumbersGridConfigService.columnDefs;
    this.gridOptions = this.importantNumbersGridConfigService.gridOptions;
  }
  ngOnInit(): void {
    this.gridApiService.gridApi$
    .pipe(takeUntil(this.destroy$))
    .subscribe((e: GridOptions) => {
      this.gridApi = e.api;
      this.gridApi.setServerSideDatasource(this.dataSource);
    });
  }

public dataSource: IServerSideDatasource = {
    getRows: (params: any) => {
      params.request.SearchText = this.searchText;
      params.api.sizeColumnsToFit();
      this.importantNumberService.GetAllImportantNumbers(params.request,
        this.columnDefs).pipe(takeUntil(this.destroy$)).subscribe((response: any) => {
        if (response) {
          if (!response.data.items?.length) {
            this.gridApi.showNoRowsOverlay();
          } else {
            this.gridApi.hideOverlay();
          }
          params.success({
            rowData: response.data.items,
            rowCount: response.data.totalCount,
          });

        }
      });
    },
  };

}
