import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpJsonParseError, HttpErrorResponse } from "@angular/common/http/src/response";

import { ReportInfo } from '../reports-list/reportInfo';
import { Report } from '../reports-details/report';
import { MissionExecInfo } from '../reports-details/missionExecInfo';
import { ExecutedStepsStatus } from '../reports-details/executedStepsStatus';


@Injectable()
export class ReportsService {

    private _reportsUrl: string = 'http://localhost:49297';
    private _reportsUrlMock: string = './assets/reports/reports.json';
    private _selectedreportsUrlMock: string = './assets/reports/report.json';
    constructor(private _http: HttpClient) { }

    private reportSource = new BehaviorSubject(new Report());
    report = this.reportSource.asObservable();

    private missionExecSource = new BehaviorSubject([]);
    execMission = this.missionExecSource.asObservable();

    testServer(): Observable<string> {
        var url = this._reportsUrl+"/api/values";
        return this._http.get<ReportInfo[]>(url)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    getReports(): Observable<ReportInfo[]> {
        return this._http.get<ReportInfo[]>(this._reportsUrlMock)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSelectedReportAsync(id: number): Observable<ReportInfo> {
        // const url = `${this._selectedreportsUrl}/${id}`;
        return this._http.get<Report>(this._selectedreportsUrlMock)
            .do(data => console.log('1: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSelectedReport(id: number): void {
        this.getSelectedReportAsync(id).subscribe(report => {
            this.reportSource.next(report);
        }, error => console.error(error));
    }

    getMissionExecInfoAsync(): Observable<MissionExecInfo[]> {
        return this._http.get<MissionExecInfo[]>(this._reportsUrl+"/api/MissionsExecution")
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getMissionExecInfo(): void {
        this.getMissionExecInfoAsync().subscribe(missions => {
            this.missionExecSource.next(missions);
        }, error => console.error(error));
    }

    getExecutedMissionStepsStatuses(id: number): Observable<ExecutedStepsStatus[]> {
        var url = `${this._reportsUrl}/api/MissionsExecution/${id}`;
        return this._http.get<ExecutedStepsStatus[]>(url)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}