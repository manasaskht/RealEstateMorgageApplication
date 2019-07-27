import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppraisalQuoteService } from './appraisalquote.service';
import { appraisalDetails } from '../model/appraisalDetails';
@Component({
  selector: 'app-appraisalquote',
  templateUrl: './appraisalquote.html',
  styleUrls: ['./appraisalquote.css'],
  providers: [AppraisalQuoteService]
})
export class AppraisalQuoteComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _generateQuoteService: AppraisalQuoteService) {
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
        
      }
    );
  }
  SaveDetails() {
    console.log('Saved');
    this._generateQuoteService.sendAppraisalDetailsToInsurer({
      mortgageAppId: this.AppraisalModel.MortID, MlsID: this.AppraisalModel.M1sID,
      AppraisalValue: this.AppraisalModel.AppraisalValue, customerName: this.AppraisalModel.Name
    }).subscribe(data => {
      console.log(data);
    });
    this._generateQuoteService.updateAppraisalDetails({ AppraisalValue: this.appraisalvalue, MortID: this.AppraisalModel[0].MortID }
    ).subscribe(data => {
      console.log(data);
    })
  }
}
