import { HttpClient } from '@angular/common/http';
import { insuranceDetails } from '../model/insuranceDetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class pendingrequestService 
{
    apiURL = "http://localhost:1337";
    constructor(private httpClient : HttpClient)
    {

    }
    public getAllRequest(): Observable<insuranceDetails []>
    {
        return this.httpClient.get<insuranceDetails[]>(`${this.apiURL}/api/getpendingRequests`);
    }
}