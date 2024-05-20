import { GridApiService } from 'src/app/data-grid/grid-api.service';
import { HospitalGridConfigService } from './../../../data-grid/hospital-grid-config.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GridOptions, IServerSideDatasource } from '@ag-grid-community/core';
import { AuthService } from 'src/app/services/auth.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { AddHospitalComponent } from '../add-hospital/add-hospital.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/common-components/snackbar/snackbar.component';
import { ConfirmDialogComponent } from 'src/app/common-components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
})
export class HospitalComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  columnDefs: any;
  gridOptions: any;
  private searchText = '';
  public gridRequestParams: any;
  public selectedRow: any;
  public gridApi: any;
  public apiLink: any;
  userInfo: any;
  tokenInfo: any;
  constructor(
    private hospitalGridConfigService: HospitalGridConfigService,
    private gridApiService: GridApiService,
    private authService: AuthService,
    private hospitalService: HospitalService,
    private dialog: MatDialog,
    private snackBar:MatSnackBar
  ) {
    this.gridOptions = this.hospitalGridConfigService.gridOptions;
    this.columnDefs = this.hospitalGridConfigService.columnDefs;
    this.gridApiService.selectedRows$.subscribe((res) => {
      if (res?.node?.selected == true) {
        this.selectedRow = res.data;
      } else if (res?.data?.id == this.selectedRow?.id) {
        this.selectedRow = null;
      }
    });
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
          delete: (params:any) => this.deleteHospital(params.data)
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.gridApiService.gridApi$
      .pipe(takeUntil(this.destroy$))
      .subscribe((e: GridOptions) => {
        this.gridApi = e.api;
        this.gridApi.setServerSideDatasource(this.dataSource);
      });
    this.userInfo = this.authService.userInfo$.value.data.userInfoDto;
    this.tokenInfo = this.authService.userInfo$.value.data.tokens;
  }

  public dataSource: IServerSideDatasource = {
    getRows: (params: any) => {
      ;
      this.gridRequestParams = params.request;
      params.request.SearchText = this.searchText;
      params.api.sizeColumnsToFit();
      this.hospitalService
        .GetAllHospitals(params.request, this.columnDefs)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: any) => {
          ;
          if (response) {
            if (!response.data.items?.length) {
              this.gridApi.showNoRowsOverlay();
            } else {
              this.gridApi.hideOverlay();
            }
            params.success({
              rowData: response.data.items,
              rowCount: response.data?.totalCount,
            });
          }
        });
    },
  };



  deleteHospital(params:any){
    this.dialog
    .open(ConfirmDialogComponent, {
      width: "400px",
      data: {
        title: "Delete Member",
        message: "Do you want to delete this member?",
      },
    })
    .afterClosed()
    .subscribe((res) => {
      if (res === "Confirm"){
    const payload = {
       id: params.id
    }
    this.hospitalService.DeleteHospital(payload).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: any)=>{
        this.gridApi?.refreshServerSide({ route: [], purge: true });
        this.snackBar.openFromComponent(SnackbarComponent,
          {
            duration: 3000,
            horizontalPosition: 'center',
            data: {
              title: 'Member Deleted successfully',
              action: 'Dismiss',
              type: 'snackbar-success',
            },
          }
      );
      }
     })
    }
   })
  }

  addNew() {
    this.dialog
      .open(AddHospitalComponent, {
        autoFocus: false,
        width: '800px',
        height: '550px',
        // data: items,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result.succeeded) {
          this.gridApi.setServerSideDatasource(this.dataSource);
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 2000,
            horizontalPosition: 'center',
            data: {
              title: result?.messages[0],
              action: 'Dismiss',
              type: 'snackbar-success',
            },
          });
        }
      });
  }
}

