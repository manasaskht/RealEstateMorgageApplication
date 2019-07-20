import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  reappraiserid: string;
  isLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
    const reappraiserid = window.localStorage.getItem('reappraiserid');
    if (reappraiserid !== null) {
      this.reappraiserid = reappraiserid;
      this.isLoggedIn = true;

    }

  }

}
