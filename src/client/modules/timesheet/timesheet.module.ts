import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSheetComponent } from './components/timesheet/time-sheet.component';
import { TimesheetEntryComponent } from './components/timesheet-entry/timesheet-entry.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TimeSheetComponent, TimesheetEntryComponent],
  exports: [
    TimesheetEntryComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class TimesheetModule { }
