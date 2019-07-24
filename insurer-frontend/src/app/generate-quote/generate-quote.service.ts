import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { insuranceDetails } from '../model/insuranceDetails';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    })
  };
@Injectable({
    providedIn:'root'
})

export class GenerateQuoteService 
{
apiURL = "http://localhost:1337";
apiURL1 = "http://localhost:1339";
constructor(private httpClient: HttpClient)
{

}
public getQuotesDetails(mortgageId : string)
{
   
    return this.httpClient.get<insuranceDetails>(`${this.apiURL}/api/quoteDetailsById/`+ mortgageId);
}

public sendInsuranceDetailsToBroker(insuranceDet : Object)
{
    return this.httpClient.post<Boolean>(`${this.apiURL1}/api/insuranceInfo`, insuranceDet, httpOptions) 
}
public updateInsuranceDetails(insuranceDet : Object)
{
    return this.httpClient.put<Boolean>(`${this.apiURL1}/api/insuranceInfo`, insuranceDet, httpOptions) 
}
}