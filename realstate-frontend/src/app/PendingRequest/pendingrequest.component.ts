import { Component, OnInit } from '@angular/core';
import { pendingrequestService } from './pendingrequest.service';
import { Router } from '@angular/router';
import { appraisalDetails } from '../model/appraisalDetails';
@Component({
    selector: 'app-pendingrequest',
    templateUrl: './pendingrequest.html',
    styleUrls: ['./pendingrequest.css'],
    providers: [pendingrequestService]
  })
export class PendingrequestComponent implements OnInit 
{
  constructor(private pendingrequestService: pendingrequestService, private router: Router)  { }
  public pendingRequests : appraisalDetails [] = [];
  ngOnInit() 
  {
  this.pendingrequestService.getAllRequest().subscribe(data => {
    console.log(data);
    this.pendingRequests = data;
  });
  
  }
  generateAppraisalQuote(mortId: Number, AppraisalValue : Number)
  {
    console.log('mortid' + mortId + '\n'  + 'AppraisalValue' + AppraisalValue );
  
  }
}
