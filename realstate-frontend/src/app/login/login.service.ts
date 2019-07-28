import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  apiURL = 'http://localhost:1339';

  constructor(private httpClient: HttpClient) {
  }

  public login(reappraiser: Object) {
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/reappraiser/login`, reappraiser, httpOptions);
  }

}
