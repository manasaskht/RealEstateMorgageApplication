import {Injectable} from '@angular/core';
import {HttpParams, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mortgagedetails} from '../model/mortgagedetails';


@Injectable()
export class ApplicationDetailsService {
  apiURL = 'http://35.244.251.62';

  constructor(private httpClient: HttpClient) {
  }

  GetApplicationDetails(appointment_id: string) {
    const params = new HttpParams()
      .set('param1', appointment_id);

    return this.httpClient.get<mortgagedetails>(`${this.apiURL}/api/applicationDetail`, {params: params});
  }
}
