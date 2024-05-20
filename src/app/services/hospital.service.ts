import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AgGridRequestService } from './ag-grid-request.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  options = { headers: this.headers };
  hospitalUrl=environment.apiUrl + "/api/Hospital";

  constructor(private http: HttpClient,
    private agGridRequestService:AgGridRequestService
  ) { }
  public GetAllHospitals(body: any,columnDefs?: any,memberReportViewModel?: any,globalSearch?: any){
    const filters = {}
  let commonRequest: any = this.agGridRequestService.transformAgGridRequest(
    body,
    columnDefs,
    globalSearch,
    filters
  );
  let payload :any = {
    ...commonRequest,
   ...memberReportViewModel
  }
  return this.http.post(`${this.hospitalUrl}/GetAllHospitals`,payload,this.options);
}

public CreateUpdateHospital(payload:any){
  return this.http.post(`${this.hospitalUrl}/CreateUpdateHospital`,
  payload ,
  this.options);
}

DeleteHospital(payload:any) {
  return this.http.post
  (`${this.hospitalUrl}/DeleteHospital?id=${payload.id}`,
    this.options
  );
}
}
