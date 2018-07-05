
import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { Observable } from 'rxjs/Observable';

import { ExecutedStepsStatus } from '../reports-details/executedStepsStatus';

@Component({
    selector: 'report-details-statuses',
    templateUrl: './report-details-statuses.html',
    styleUrls: []
})
export class ReportDetailsStatusesComponent implements OnInit {

    @Input() execSteps: ExecutedStepsStatus[];


    constructor() {
    }

    ngOnInit() {
    }

}
