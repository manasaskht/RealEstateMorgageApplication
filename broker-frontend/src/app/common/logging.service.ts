import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  apiURL = 'http://35.244.251.62';

  constructor(private httpClient: HttpClient) {
  }

  public logReqResp(req: string, res: string) {
     return this.httpClient.post(`${this.apiURL}/api/logreqres`, { request: req, response: res }, httpOptions);
  }



}
