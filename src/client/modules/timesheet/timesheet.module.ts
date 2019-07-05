import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { TimesheetEntryComponent } from './components/timesheet-entry/timesheet-entry.component';



@NgModule({
  declarations: [TimesheetComponent, TimesheetEntryComponent],
  imports: [
    CommonModule
  ]
})
export class TimesheetModule { }
