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
  apiUrl=environment.apiUrl + '/api/ImportantNumber';

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
      `${this.apiUrl}/GetAllImportantNumbers`,
      payload,
      this.options
    );
  }
}
