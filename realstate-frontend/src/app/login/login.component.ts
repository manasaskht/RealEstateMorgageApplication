import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  appraiserLoginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public reappraiserLoginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.appraiserLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.appraiserLoginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.appraiserLoginForm.invalid) {
      return;
    }

    let reappraiser = {
      reappraiserID: this.appraiserLoginForm.get('username').value,
      password: this.appraiserLoginForm.get('password').value,
    };


    this.reappraiserLoginService.login(reappraiser)
      .subscribe(data => {
          localStorage.removeItem('reappraiserID');
          localStorage.setItem('reappraiserID', this.appraiserLoginForm.get('username').value);

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
