import { Component, OnInit } from '@angular/core';
import { pendingrequestService } from './pendingrequest.service';
import { insuranceDetails } from '../model/insuranceDetails';
import {Router} from '@angular/router';
import { LoggingService } from '../Common/logging.service';
@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css'],
  providers: [pendingrequestService]
})
export class PendingrequestComponent implements OnInit 
{

  constructor(private _pendingrequestService: pendingrequestService, private router: Router, private loggingService: LoggingService)  { }
  public pendingRequests : insuranceDetails [] = [];
  ngOnInit() 
  {
  this._pendingrequestService.getAllRequest().subscribe(data => {
    console.log(data);
    this.pendingRequests = data;
    this.loggingService.logReqResp('Fetching pending request:', JSON.stringify(data)).subscribe();
  }, err =>
  {
    this.loggingService.logReqResp('Error in pending request:', JSON.stringify(err)).subscribe();
  });
  
  }
  generateQuote(mortId: Number, insuredValue: Number, deductibleValue : Number)
  {
    console.log('mortid' + mortId + '\n' + 'insuredValue' +insuredValue +  '\n' + 'deductibleValue' + deductibleValue );
  
  }
}
