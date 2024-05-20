import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AgGridRequestService } from './ag-grid-request.service';

@Injectable({
  providedIn: 'root'
})
export class ImportantNumberService {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  options = { headers: this.headers };
  importantNumbersUrl=environment.apiUrl + '/api/ImportantNumber';

  constructor(private http: HttpClient,
    private agGridRequestService: AgGridRequestService
  ) { }

  public GetAllImportantNumbers(body: any, columnDefs: any, globalSearch?: any) {
    const filters = {};
    let commonRequest: any = this.agGridRequestService.transformAgGridRequest(
      body,
      columnDefs,
      globalSearch,
      filters
    );
    let payload: any = {
      ...commonRequest,
    };
    return this.http.post(
      `${this.importantNumbersUrl}/GetAllImportantNumbers`,
      payload,
      this.options
    );
  }


  public CreateUpdateImportantNumber(payload:any){
    return this.http.post(`${this.importantNumbersUrl}/CreateUpdateImportantNumber`,
    payload ,
    this.options);
  }

  DeleteImportantNumber(payload:any) {
    return this.http.post(
     ` ${this.importantNumbersUrl}/DeleteImportantNumber?id=${payload.id}`,
      this.options
    );
  }
}
