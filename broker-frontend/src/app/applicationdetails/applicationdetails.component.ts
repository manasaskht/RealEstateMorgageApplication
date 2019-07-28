import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { mortgagedetails } from '../model/mortgagedetails';
import { HttpParams } from '@angular/common/http';
import { ApplicationDetailsService } from './applicationdetails.service';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-applicationdetails',
  templateUrl: './applicationdetails.component.html',
  styleUrls: ['./applicationdetails.component.css'],
  providers: [ApplicationDetailsService, LoggingService]
})
export class ApplicationdetailsComponent implements OnInit {

  constructor(private _applicationDetailService: ApplicationDetailsService, private route: ActivatedRoute,
              private loggingService: LoggingService) { }
  public mortgageModel: mortgagedetails;

  ngOnInit() {
    this.mortgageModel = new mortgagedetails();
    this.mortgageModel.application_id = this.route.snapshot.params['appid'];
    this._applicationDetailService.GetApplicationDetails(this.mortgageModel.application_id).subscribe(
      data => {
        console.log(data);
        this.mortgageModel = data;
        this.loggingService.logReqResp('MBR: GetApplicationDetails: Application id -' + this.mortgageModel, JSON.stringify(data)).subscribe();
      },
      err => {
        console.log(err);
        this.loggingService.logReqResp('MBR: GetApplicationDetails: Application id -' + this.mortgageModel, JSON.stringify(err)).subscribe();
      }

    );
  }



}
