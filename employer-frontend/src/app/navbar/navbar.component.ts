import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  employeeID:string;
  isLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
    const employeeID = window.localStorage.getItem('employeeID');
    if(employeeID !== null){
      this.employeeID = employeeID;
      this.isLoggedIn = true;

    }

  }

}
