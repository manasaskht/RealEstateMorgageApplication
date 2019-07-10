import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {HomeService} from "./home.service";
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {
  employees: Employee[];

  constructor(private  homeService: HomeService, private loggingService: LoggingService) {
  }

  ngOnInit() {
    this.homeService.getEmployees()
      .subscribe(data => {
          this.employees = data;
          console.log("employees", data);
          this.loggingService.logReqResp('GetEmployees', JSON.stringify(data)).subscribe();
        },
        err => {
          console.log(err);
          this.loggingService.logReqResp('GetEmployees', JSON.stringify(err)).subscribe();
        });
  }

}


