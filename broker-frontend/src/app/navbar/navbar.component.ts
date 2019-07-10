import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  autheticated: boolean;
  username: string;

  constructor() {

  }

  ngOnInit() {
    this.autheticated = false;
    if (sessionStorage.getItem('username')) {
      this.autheticated = true;
      this.username = sessionStorage.getItem('username');
    }
  }

}
