import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportsDetailsComponent } from './reports-details/reports-details.component';
import {ReportDetailsStatusesComponent} from './reports-details/report-details-statuses'
import {ReportsService} from '../app/services/reports.service';

@NgModule({
  declarations: [
    AppComponent,
    ReportsListComponent,
    ReportsDetailsComponent,
    ReportDetailsStatusesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
