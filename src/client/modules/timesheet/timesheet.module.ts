import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { TimesheetEntryComponent } from './components/timesheet-entry/timesheet-entry.component';
import {MatButtonModule, MatCardModule, MatListModule} from '@angular/material';



@NgModule({
  declarations: [TimesheetComponent, TimesheetEntryComponent],
  exports: [
    TimesheetEntryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class TimesheetModule { }
