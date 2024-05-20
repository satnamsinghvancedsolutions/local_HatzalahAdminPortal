import { GridOptions, IServerSideDatasource } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GridApiService } from 'src/app/data-grid/grid-api.service';
import { ImportantNumbersGridConfigService } from 'src/app/data-grid/important-numbers-grid-config.service';
import { ImportantNumberService } from 'src/app/services/important-number.service';
import { AddImpotantNumberComponent } from '../add-impotant-number/add-impotant-number.component';
import { SnackbarComponent } from 'src/app/common-components/snackbar/snackbar.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/common-components/confirm-dialog/confirm-dialog.component';

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
    private importantNumberService: ImportantNumberService,
    private dialog: MatDialog,
    private snackBar:MatSnackBar
  ){
    this.columnDefs = this.importantNumbersGridConfigService.columnDefs;
    this.gridOptions = this.importantNumbersGridConfigService.gridOptions;
    this.columnDefs.splice(14, 0,
      {
        headerName: 'Action',
        sortable: true,
        cellRenderer:"actionsCellRendererComponent",

        pinned: 'right',
        cellRendererParams: {
          // edit: (params:) =>{
          //   this.sideNavService.openSidePanel({members: params.data,isActionSidenav:true});
          // } ,
          delete: (params:any) => this.deleteImportantNumber(params.data)
        }
      });
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

  // addNew() {
  //   this.dialog
  //     .open(AddImpotantNumberComponent, {
  //       autoFocus: false,
  //       width: '800px',
  //       height: '550px',
  //       // data: items,
  //     })
  //     .afterClosed()
  //     .subscribe((result) => {
  //       if (result == 'Saved') {
  //         this.gridApi.setServerSideDatasource(this.dataSource);
  //         this.snackBar.openFromComponent(SnackbarComponent, {
  //           duration: 2000,
  //           horizontalPosition: 'center',
  //           data: {
  //             title: result?.message[0],
  //             action: 'Dismiss',
  //             type: 'snackbar-success',
  //           },
  //         });
  //       }
  //     });
  // }
  addNew() {
    this.dialog
      .open(AddImpotantNumberComponent, {
        autoFocus: false,
        width: '800px',
        height: '550px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === 'Saved') {
          this.gridApi.setServerSideDatasource(this.dataSource);
          const message = result?.message?.[0] || '  Added';
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2000,
            horizontalPosition: 'center',
            data: {
              title: message,
              action: 'Dismiss',
              type: 'snackbar-success',
            },
          });
        } else if (result?.message) {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2000,
            horizontalPosition: 'center',
            data: {
              title: result.message[0],
              action: 'Dismiss',
              type: 'snackbar-error',
            },
          });
        }
      });
  }


  deleteImportantNumber(data:any) {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '500px',
        data: {
          title: 'Delete Important Member',
          message: 'Are you sure to delete this important number?',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res === 'Confirm') {
          const payload = {
            id: data.id,
          };
          this.importantNumberService
            .DeleteImportantNumber(payload)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (res: any) => {
                this.gridApi?.refreshServerSide({
                  route: [],
                  purge: true,
                });
              },
            });
        }
      });
  }

}
