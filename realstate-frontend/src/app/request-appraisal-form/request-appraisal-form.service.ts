import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestAppraisalFormService {
  apiURL = 'http://34.98.84.53';

  constructor(private httpClient: HttpClient) {
  }

  public requestAppraisal(customer: Object) {
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/requestappraisal`, customer);
  }
}
