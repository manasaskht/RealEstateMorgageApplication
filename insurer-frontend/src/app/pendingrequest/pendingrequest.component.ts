import { Component, OnInit } from '@angular/core';
import { pendingrequestService } from './pendingrequest.service';
import { insuranceDetails } from '../model/insuranceDetails';

@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css'],
  providers: [pendingrequestService]
})
export class PendingrequestComponent implements OnInit {

  constructor(private _pendingrequestService: pendingrequestService)  { }
  public pendingRequests : insuranceDetails [] = [];
  ngOnInit() 
  {
  this._pendingrequestService.getAllRequest().subscribe(data => {
    console.log(data);
    this.pendingRequests = data;
  });
  
  }

}
