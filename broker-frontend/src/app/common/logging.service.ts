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
  apiURL = 'http://localhost:1337';

  constructor(private httpClient: HttpClient) {
  }

  public logReqResp(req: string, res: string) {
     return this.httpClient.post(`${this.apiURL}/api/logreqres`, { request: req, response: res }, httpOptions);
  }



}
