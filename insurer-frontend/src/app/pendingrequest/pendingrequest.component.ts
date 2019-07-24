import { Component, OnInit } from '@angular/core';
import { pendingrequestService } from './pendingrequest.service';
import { insuranceDetails } from '../model/insuranceDetails';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css'],
  providers: [pendingrequestService]
})
export class PendingrequestComponent implements OnInit 
{

  constructor(private _pendingrequestService: pendingrequestService, private router: Router)  { }
  public pendingRequests : insuranceDetails [] = [];
  ngOnInit() 
  {
  this._pendingrequestService.getAllRequest().subscribe(data => {
    console.log(data);
    this.pendingRequests = data;
  });
  
  }
  generateQuote(mortId: Number, insuredValue: Number, deductibleValue : Number)
  {
    console.log('mortid' + mortId + '\n' + 'insuredValue' +insuredValue +  '\n' + 'deductibleValue' + deductibleValue );
  
  }
}
