import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Employee} from "../model/employee";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MortgageApplicationService {
  apiURL = 'http://localhost:1336';

  constructor(private httpClient: HttpClient) {
  }


  public sendApplication(application: Object) {
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/mortgage/create`, application, httpOptions);
  }


}
