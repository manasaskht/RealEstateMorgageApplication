import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = 'http://localhost:1340';

  constructor(private httpClient: HttpClient) {
  }

  public login(insurer: Object) {
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/insurer/login`, insurer, httpOptions);
  }

}
