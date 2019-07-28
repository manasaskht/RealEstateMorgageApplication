import { Component, OnInit } from '@angular/core';
import { pendingrequestService } from './pendingrequest.service';
import { Router } from '@angular/router';
import { appraisalDetails } from '../model/appraisalDetails';
import { LoggingService } from '../Common/logging.service';
@Component({
    selector: 'app-pendingrequest',
    templateUrl: './pendingrequest.html',
    styleUrls: ['./pendingrequest.css'],
    providers: [pendingrequestService, LoggingService]
  })
export class PendingrequestComponent implements OnInit 
{
  constructor(private pendingrequestService: pendingrequestService, private router: Router, private loggingService: LoggingService)  { }
  public pendingRequests : appraisalDetails [] = [];
  ngOnInit() 
  {
  this.pendingrequestService.getAllRequest().subscribe(data => {
    console.log(data);
    this.pendingRequests = data;
    this.loggingService.logReqResp('Fetching getAllRequest request in real state:', JSON.stringify(data)).subscribe();
  });
  
  }
  generateAppraisalQuote(mortId: Number, AppraisalValue : Number)
  {
    console.log('mortid' + mortId + '\n'  + 'AppraisalValue' + AppraisalValue );
  
  }
}
