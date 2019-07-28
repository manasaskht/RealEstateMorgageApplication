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
    this.loggingService.logReqResp('RE -Fetching all pending Request request in real state:', JSON.stringify(data)).subscribe();
  }, err =>{
    this.loggingService.logReqResp('RE-ErrorFetching all pending Request request in real state:', JSON.stringify(err)).subscribe();
  });

  }
  generateAppraisalQuote(mortId: Number, AppraisalValue : Number)
  {
    console.log('mortid' + mortId + '\n'  + 'AppraisalValue' + AppraisalValue );

  }
}
