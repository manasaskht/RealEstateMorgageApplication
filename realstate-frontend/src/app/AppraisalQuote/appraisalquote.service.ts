
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { appraisalDetails } from '../model/appraisalDetails';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    })
  };
@Injectable({
    providedIn:'root'
})

export class AppraisalQuoteService 
{
apiURL = "http://localhost:1337";
apiURL1 = "http://localhost:1339";
constructor(private httpClient: HttpClient)
{

}
public getDetails(mortgageId : string)
{
   console.log(mortgageId);
    return this.httpClient.get<appraisalDetails>(`${this.apiURL}/api/quoteDetailsById/`+ mortgageId);
}

public sendAppraisalDetailsToInsurer(AppraisalDet : Object)
{
    return this.httpClient.post<Boolean>(`${this.apiURL1}/api/insertInsuranceDetails`, AppraisalDet, httpOptions) 
}
public updateAppraisalDetails(updatedAppraisalDet : Object)
{
    return this.httpClient.post<Boolean>(`${this.apiURL}/api/updateAppraisalDetails`, updatedAppraisalDet, httpOptions) 
}
}
