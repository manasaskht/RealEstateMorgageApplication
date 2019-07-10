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


export class EmployerLoginService {
  apiURL = 'http://localhost:1337';

  constructor(private httpClient: HttpClient) {
  }

  public login(employee: Object) {
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/employee/login`, employee, httpOptions);
  }


}
