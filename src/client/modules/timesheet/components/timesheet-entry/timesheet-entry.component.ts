import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TimeEntry} from '../../models/time-entry.model';
import {Observable} from 'rxjs';
import {DateUtil, ObjectUtil} from '@ukon1990/js-utilities';
import {TimesheetService} from '../../timesheet.service';

@Component({
  selector: 'p-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss']
})
export class TimesheetEntryComponent implements OnInit, OnDestroy {
  @Input() projectId: number;
  @Input() entries: TimeEntry[];
  currentEntry: TimeEntry;
  elapsedTime = '0h 0m';
  elapsedTimeInterval;
  hasCheckedEntries: boolean;

  constructor(private service: TimesheetService) {
    this.elapsedTimeInterval = setInterval(() =>
        this.setElapsedTime(),
      1000);
  }

  ngOnInit() {
    this.currentEntry = new TimeEntry(this.projectId, undefined);
  }

  ngOnDestroy(): void {
    clearInterval(this.elapsedTimeInterval);
  }

  async startTimer(): Promise<void> {
    if (!this.currentEntry.startTime) {
      this.currentEntry.startTime = new Date();
      await this.service.create(this.currentEntry)
        .then((entry: TimeEntry) =>
          this.currentEntry = entry);
      this.entries.push(this.currentEntry);
    }
  }

  async stopTimer(): Promise<void> {
    if (!this.currentEntry.endTime) {
      this.currentEntry.endTime = new Date();
      await this.service.save(this.currentEntry)
        .then((entry: TimeEntry) =>
          ObjectUtil.overwrite(entry, this.currentEntry));
    }
  }

  private setElapsedTime() {

    if (!this.hasCheckedEntries && this.entries) {
      this.entries.forEach(entry => {
        if (entry.startTime && !entry.endTime) {
          // TODO: && Is the same user
          this.currentEntry = entry;
        }
      });
      this.hasCheckedEntries = true;
    } else if (this.currentEntry && this.currentEntry.startTime) {
      const minutes = DateUtil.timeSince(this.currentEntry.startTime, 'm');
      this.elapsedTime = `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
    }
  }

  isTimerRunning() {
    return this.currentEntry && this.currentEntry.startTime !== undefined;
  }
}
