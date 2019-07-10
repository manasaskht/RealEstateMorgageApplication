import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployerLoginService} from "./employer-login.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

  employerLoginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public employerLoginService: EmployerLoginService, public router: Router) {
  }

  ngOnInit() {
    this.employerLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.employerLoginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.employerLoginForm.invalid) {
      return;
    }

    let employee = {
      employeeid: this.employerLoginForm.get('username').value,
      password: this.employerLoginForm.get('password').value,
    };

    this.employerLoginService.login(employee)
      .subscribe(data => {
          localStorage.removeItem('employeeID');
          localStorage.setItem('employeeID', this.employerLoginForm.get('username').value);

          //Source: https://sweetalert2.github.io/#examples
          Swal.fire({
            title: 'You have logged in successfully',
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
            text: 'Your credentials do not match. Please, try again.',
            type: 'error',
            confirmButtonText: 'OK',
            onClose: () => {
              //this.router.navigate(['']);
            }
          })
        });
  }

}
