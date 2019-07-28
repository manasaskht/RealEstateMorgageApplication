import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { insuranceDetails } from '../model/insuranceDetails';
import { pendingrequestService } from '../pendingrequest/pendingrequest.service';
import { GenerateQuoteService } from './generate-quote.service';
import Swal from 'sweetalert2';
import { LoggingService } from '../Common/logging.service';
@Component({
  selector: 'app-generate-quote',
  templateUrl: './generate-quote.component.html',
  styleUrls: ['./generate-quote.component.css'],
  providers: [GenerateQuoteService,LoggingService]
})
export class GenerateQuoteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _generateQuoteService : GenerateQuoteService,private loggingService: LoggingService,private rte: Router) 
  {

  }
  public insuranceModel : insuranceDetails;
  insuredValue: Number;
  deductibleValue:Number;
  ngOnInit()
  {
  this.insuranceModel =  new insuranceDetails();
  this.insuranceModel.MortID = this.route.snapshot.params['MortID'];
  this._generateQuoteService.getQuotesDetails(this.insuranceModel.MortID).subscribe(
    data =>
    {
      console.log(data);
      this.insuranceModel= data;
    }
  );
  }
  SaveDetails()
  {
    console.log('Saved');
    this._generateQuoteService.sendInsuranceDetailsToBroker({mortgageAppId:this.insuranceModel.MortID,msid: this.insuranceModel.MisId,
      insuredValue: this.insuredValue,deductibleValue:this.deductibleValue,customerName: this.insuranceModel.customerName,
      appraisalValue: this.insuranceModel.appraisalValue
    }).subscribe( data =>{
      console.log(data);
   
    });
    this._generateQuoteService.updateInsuranceDetails({insuredValue:this.insuredValue,deductibleValue:this.deductibleValue,MortID:this.insuranceModel.MortID}
      ).subscribe(data =>
        {
          console.log(data);
          console.log('update method entered');
       
          this.loggingService.logReqResp('updateInsuranceDetails request:', JSON.stringify(data)).subscribe();

        },err=>{
          this.loggingService.logReqResp('Error in updateInsuranceDetails request:', JSON.stringify(err)).subscribe();
        });
        Swal.fire({
          title: 'Insured and Deductible amount updated successfully',
          type: 'success',
          confirmButtonText: 'OK',
          onClose: () => {
            this.rte.navigate(['pendingrequest']);
          }
        });
        //this.rte.navigate(['pendingrequest']);
  }
}
