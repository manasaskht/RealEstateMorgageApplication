import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private loggingService: LoggingService) {
  }

  username: string;
  password: string;
  showErrorMsg: boolean;
  errorMsg: string;

  ngOnInit() {
  }

  validateUser() {
    this.showErrorMsg = false;
    sessionStorage.clear();
    if (this.validateInputs()) {
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('password', this.password);
      this.loginService.isUserAuthenticated({username: this.username, password: this.password}).subscribe(x => {
        if (x['isValidUser'] === true) {
          this.router.navigate(['myapplications']);
        } else {
          this.showErrorMsg = true;
          this.errorMsg = 'Invalid credentials !!!';
        }
        this.loggingService.logReqResp('MBR: ValidateUser: Username - ' + this.username + ' password - ' +
                                        this.password, JSON.stringify(x)).subscribe();
      });
    } else {
      this.showErrorMsg = true;
    }
  }

  validateInputs(): boolean {
    let isInputValid = true;
    if (!this.username && !this.password) {
      isInputValid = false;
      this.errorMsg = 'Please enter the username and password';
    } else if (!this.username) {
      isInputValid = false;
      this.errorMsg = 'Please enter the username';
    } else if (!this.password) {
      isInputValid = false;
      this.errorMsg = 'Please enter the password';
    }
    return isInputValid;
  }

}
