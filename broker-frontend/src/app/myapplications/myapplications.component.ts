import { Component, OnInit } from '@angular/core';
import { MyapplicationsService } from './myapplications.service';
import { mortgagedetails } from '../model/mortgagedetails';
import { LoggingService } from '../common/logging.service';

@Component({
  selector: 'app-myapplications',
  templateUrl: './myapplications.component.html',
  styleUrls: ['./myapplications.component.css'],
  providers: [LoggingService]
})
export class MyapplicationsComponent implements OnInit {

  constructor(private myapplnService: MyapplicationsService, private loggingService: LoggingService) { }
  applications: mortgagedetails[];

  ngOnInit() {
    const userName = sessionStorage.getItem('username');
    this.myapplnService.fetchMyApplications(userName).subscribe(x => {
      this.applications = x;
      this.loggingService.logReqResp('MBR: Fetch mortgageapplications: username - ' + userName, JSON.stringify(x)).subscribe();
    },
    err => {
      this.loggingService.logReqResp('MBR: Fetch mortgageapplications: username - ' + userName, JSON.stringify(err)).subscribe();
    });
  }

}
