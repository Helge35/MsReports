import { Component, OnInit } from '@angular/core';
import { ReportInfo } from './reportInfo';
import { ReportsService } from '../services/reports.service';
import { Observable } from 'rxjs/Observable';
import {Report} from '../reports-details/report';

@Component({
  selector: 'reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {

  reportsList : ReportInfo[]= [];
  errorMessage: string;
  serverStatus:string;

  getSelectedReport(id: number)
  {
    if(id == 1){
      this._reportsService.getMissionExecInfo();
    }
    else{
      this._reportsService.getSelectedReport(id);
    }
  }

  testServer():void{
      this._reportsService.testServer().subscribe(s=>this.serverStatus=s);
  }


  constructor(private _reportsService: ReportsService) { }

  ngOnInit() {
    this._reportsService.getReports()
      .subscribe(reports => {
        this.reportsList = reports
      },
      error => this.errorMessage = <any>error);
  }

}
