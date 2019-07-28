import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CanActivate, Route, Router} from '@angular/router';
import {mortgagedetails} from '../model/mortgagedetails';
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class MyapplicationsService {
  apiURL = 'http://35.244.251.62';

  constructor(private httpClient: HttpClient) {
  }

  public fetchMyApplications(username: string) {
    const params = new HttpParams()
      .set('username', username);

    return this.httpClient.get<mortgagedetails[]>(`${this.apiURL}/api/mortgageapplications`, {params: params});
  }
}
