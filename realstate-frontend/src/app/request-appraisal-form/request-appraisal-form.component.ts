import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RequestAppraisalFormService } from './request-appraisal-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-appraisal-form',
  templateUrl: './request-appraisal-form.component.html',
  styleUrls: ['./request-appraisal-form.component.css']
})
export class RequestAppraisalFormComponent implements OnInit {

  requestAppraiserForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public requestAppraisalFormService: RequestAppraisalFormService, public router: Router) { }



  ngOnInit() {
    this.requestAppraiserForm = this.formBuilder.group({
      custFirstName: ['', Validators.required],
      custLastName: ['', Validators.required],
      MlsID: ['', Validators.required],
      MortID: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.requestAppraiserForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.requestAppraiserForm.invalid) {
      return;
    }

    let customer = {
      custFirstName: this.requestAppraiserForm.get('custFirstName').value,
      custLastName: this.requestAppraiserForm.get('custLastName').value,
      MlsID: this.requestAppraiserForm.get('MlsID').value,
      MortID: this.requestAppraiserForm.get('MortID').value,
    };
    console.log(customer);


    this.requestAppraisalFormService.requestAppraisal(customer)
      .subscribe(data => {
        console.log(customer.MortID);




        //Source: https://sweetalert2.github.io/#examples
        Swal.fire({
          title: 'You have Submitted the form successfully',
          type: 'success',
          confirmButtonText: 'OK',
          onClose: () => {
            this.router.navigate(['']);
          }
        });
      },
        err => {
          console.log(err);
          Swal.fire({
            title: 'Error!',
            text: 'Please, try again.',
            type: 'error',
            confirmButtonText: 'OK',
            onClose: () => {
              //this.router.navigate(['']);
            }
          })
        });
  }
}
