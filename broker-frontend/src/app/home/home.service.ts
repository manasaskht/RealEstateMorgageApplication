import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiURL = 'http://35.244.251.62';

  constructor(private httpClient: HttpClient) {
  }

  public getEmployees() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    let params = new HttpParams();

    return this.httpClient.get<Employee[]>(`${this.apiURL}/api/employees`, {headers: headers, params: params});
  }



}
