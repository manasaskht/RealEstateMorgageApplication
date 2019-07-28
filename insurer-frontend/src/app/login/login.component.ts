import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import { LoggingService } from '../Common/logging.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  insurerLoginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public LoginService: LoginService, public router: Router) { }

  ngOnInit() {

    this.insurerLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.insurerLoginForm.controls;
  }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.insurerLoginForm.invalid) {
      return;
    }

    let insurer = {
      insurerid: this.insurerLoginForm.get('username').value,
      password: this.insurerLoginForm.get('password').value,
    };


    this.LoginService.login(insurer)
      .subscribe(data => {
          localStorage.removeItem('reappraiserID');
          localStorage.setItem('reappraiserID', this.insurerLoginForm.get('username').value);

          //Source: https://sweetalert2.github.io/#examples
          Swal.fire({
            title: 'You have logged in successfully',
            type: 'success',
            confirmButtonText: 'OK',
            onClose: () => {
              this.router.navigate(['pendingrequest']);
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
              this.router.navigate(['login']);
            }
          })
        });
  }
}
