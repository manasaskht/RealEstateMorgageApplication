import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = 'https://cc-broker-website.azurewebsites.net';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  isAuthenticated: boolean;

  public isUserAuthenticated(employee: Object) {
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/validateUser/`, employee, httpOptions);
  }
}
