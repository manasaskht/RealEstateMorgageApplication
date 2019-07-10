import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MortgageApplicationService} from "./morgage-application.service";
import {Router} from "@angular/router";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-morgage-application-form',
  templateUrl: './morgage-application-form.component.html',
  styleUrls: ['./morgage-application-form.component.css'],
  providers: [LoggingService]
})

export class MorgageApplicationFormComponent implements OnInit {

  mortgageForm: FormGroup;
  submitted = false;

  constructor(private  mortgageApplicationService: MortgageApplicationService, private formBuilder: FormBuilder, public router: Router,
              private loggingService: LoggingService) {
  }

  ngOnInit() {
    this.mortgageForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required]],
      address: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      companyAddress: ['', [Validators.required]],
      companyContact: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.mortgageForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.mortgageForm.invalid) {
      return;
    }

    let applicant = {
      first_name: this.mortgageForm.get('firstName').value,
      last_name: this.mortgageForm.get('lastName').value,
      address: this.mortgageForm.get('address').value,
      contact_number: this.mortgageForm.get('phoneNo').value,
      company_name: this.mortgageForm.get('companyName').value,
      company_address: this.mortgageForm.get('companyAddress').value,
      company_contact: this.mortgageForm.get('companyContact').value,
      email_id: this.mortgageForm.get('email').value
    };

    this.mortgageApplicationService.sendApplication(applicant)
      .subscribe(data => {
          console.log(data);
          this.loggingService.logReqResp('Mortgage create: ' + JSON.stringify(applicant), JSON.stringify(data)).subscribe();
          //Source: https://sweetalert2.github.io/#examples
          Swal.fire({
            title: 'Application form submitted successfully!',
            text: 'Your application id is: ' + data["id"],
            type: 'success',
            confirmButtonText: 'OK',
            onClose: () => {
              this.router.navigate(['']);
            }
          });
        },
        err => {
          console.log(err);
          this.loggingService.logReqResp('Mortgage create: ' + JSON.stringify(applicant), JSON.stringify(err)).subscribe();
          Swal.fire({
            title: 'Error!',
            text: 'There was an error. Please, try again later.',
            type: 'error',
            confirmButtonText: 'OK',
            onClose: () => {
              this.router.navigate(['']);
            }
          })
        });


  }

}
