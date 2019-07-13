import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    })
  };
  
@Injectable({
    providedIn: 'root'
})
export class LoginService
{
    apiURL ="http://localhost:1337";
constructor(private httpClient : HttpClient )
{

}
public isUserAuthenticated(employee: Object) {
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/validateUser/`, employee, httpOptions);
  }
}