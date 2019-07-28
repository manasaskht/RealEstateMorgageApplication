import { HttpClient } from '@angular/common/http';
import { appraisalDetails } from '../model/appraisalDetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class pendingrequestService
{
    apiURL = "http://localhost:1339";
    constructor(private httpClient : HttpClient)
    {

    }
    public getAllRequest(): Observable<appraisalDetails []>
    {
        console.log("manasa");
        return this.httpClient.get<appraisalDetails []>(`${this.apiURL}/api/getpendingRequests`);
    }
}
