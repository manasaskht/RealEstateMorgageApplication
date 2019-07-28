import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppraisalQuoteService } from './appraisalquote.service';
import { appraisalDetails } from '../model/appraisalDetails';
import Swal from 'sweetalert2';
import { LoggingService } from '../Common/logging.service';
@Component({
  selector: 'app-appraisalquote',
  templateUrl: './appraisalquote.html',
  styleUrls: ['./appraisalquote.css'],
  providers: [AppraisalQuoteService,LoggingService]
})
export class AppraisalQuoteComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _generateQuoteService: AppraisalQuoteService,private router: Router, private loggingService:LoggingService) {
  }
  public AppraisalModel: appraisalDetails;
  appraisalvalue: string;
  ngOnInit() {
    this.AppraisalModel = new appraisalDetails();
    this.AppraisalModel.MortID = this.route.snapshot.params['MortID'];
    this._generateQuoteService.getDetails(this.AppraisalModel.MortID).subscribe(
      data => {

        console.log(data);
        this.AppraisalModel = data;
        console.log('Service response');
        console.log(this.AppraisalModel);
        this.loggingService.logReqResp(' getDetails request in real state:', JSON.stringify(data)).subscribe();
      }
    );
  }
  SaveDetails() {
    console.log('Saved');
    console.log(this.AppraisalModel);
    this._generateQuoteService.sendAppraisalDetailsToInsurer({
      MortID: this.AppraisalModel[0].MortID, MisId: this.AppraisalModel[0].M1sID,
      appraisalValue: this.appraisalvalue, customerName: this.AppraisalModel[0].Name
    }).subscribe(data => {
      console.log(data);
   
    });
    this._generateQuoteService.updateAppraisalDetails({ AppraisalValue: this.appraisalvalue, MortID: this.AppraisalModel[0].MortID }
    ).subscribe(data => {
      console.log(data);
    });
    Swal.fire({
      title: 'saved successfully',
      type: 'success',
      confirmButtonText: 'OK',
      onClose: () => {
        this.router.navigate(['pendingrequest']);
      }
    });
  }
}