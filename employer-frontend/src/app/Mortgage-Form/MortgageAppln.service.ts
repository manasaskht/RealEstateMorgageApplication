import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class MortgageForm {
  apiURL = 'http://35.190.4.77';

  constructor(private httpClient: HttpClient) {
  }

  public getEmployeeDetails(Mortgage: Object) {
    console.log(Mortgage);
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/employee/details`, Mortgage, httpOptions);
  }


}
