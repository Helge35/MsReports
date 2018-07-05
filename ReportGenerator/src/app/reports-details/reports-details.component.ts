import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { Observable } from 'rxjs/Observable';
import { Report } from '../reports-details/report';
import { MissionExecInfo } from '../reports-details/missionExecInfo';
import { ExecutedStepsStatus } from '../reports-details/executedStepsStatus';

@Component({
  selector: 'reports-details',
  templateUrl: './reports-details.component.html',
  styleUrls: ['./reports-details.component.css']
})
export class ReportsDetailsComponent implements OnInit {

  report: Report;
  execMissions: MissionExecInfo[];
  execSteps: ExecutedStepsStatus[];

  getExecutedMissionStepsStatuses(id: number): void {
    this._reportsService.getExecutedMissionStepsStatuses(id)
      .subscribe(steps => this.execSteps = steps);
  }

  constructor(private _reportsService: ReportsService) {
    this._reportsService.report.subscribe(report => this.report = report)
    this._reportsService.execMission.subscribe(miss => this.execMissions = miss)
  }

  ngOnInit() {
  }

}
