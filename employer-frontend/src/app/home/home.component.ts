import {Component, OnInit} from '@angular/core';
import {Employee} from "../model/employee";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Employee[];

  constructor(private  homeService: HomeService) {
  }

  ngOnInit() {
    const employeeID = window.localStorage.getItem('employeeID');
    console.log("Employee ID", employeeID);

    this.homeService.getEmployees()
      .subscribe(data => {
          this.employees = data;
          console.log("employees", data);
        },
        err => {
          console.log(err);
        });
  }

}


