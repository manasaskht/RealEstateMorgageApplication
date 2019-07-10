import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MortgageForm} from './MortgageAppln.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Mortgage-Form',
  templateUrl: './MortgageAppln.component.html',
  styleUrls: ['./MortgageAppln.component.css']
})
export class MortgageFormComponent implements OnInit {

  MortgageForm: FormGroup;
  submitted = false;
  employeeID;

  constructor(private formBuilder: FormBuilder, public mortgageService: MortgageForm, public router: Router) {
  }

  ngOnInit() {
    this.employeeID = window.localStorage.getItem('employeeID');
    console.log("Employee ID", this.employeeID);
    this.MortgageForm = this.formBuilder.group({
      MortgageID: ['', [Validators.required]],
      confirmCheckbox: ['', [Validators.required]],
      URL: ['', [Validators.required]]

    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.MortgageForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.MortgageForm.invalid) {
      return;
    }
    let Mortgage = {
      applicationID: this.MortgageForm.get('MortgageID').value,
      brokerURL: this.MortgageForm.get('URL').value,
      employeeid: this.employeeID
    };

    this.mortgageService.getEmployeeDetails(Mortgage)
      .subscribe(data => {
console.log(Mortgage.applicationID);
          //Source: https://sweetalert2.github.io/#examples
          Swal.fire({
            title: 'submitted form successfully',
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
            text: 'System error!! , please try again.',
            type: 'error',
            confirmButtonText: 'OK',
            onClose: () => {
              //this.router.navigate(['']);
            }
          })
        });
  }

}
