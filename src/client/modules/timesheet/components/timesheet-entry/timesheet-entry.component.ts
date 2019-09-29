import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TimeEntry} from '../../models/time-entry.model';
import {DateUtil} from '@ukon1990/js-utilities';
import {TimeSheetService} from '../../services/time-sheet.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SubscriptionManager} from '@ukon1990/subscription-manager/dist/subscription-manager';

@Component({
  selector: 'p-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss']
})
export class TimesheetEntryComponent implements OnInit, OnDestroy {
  @Input() projectId: number;
  @Input() entries: TimeEntry[] = [];
  currentEntry: TimeEntry;
  elapsedTime = '0h 0m';
  elapsedTimeInterval;
  hasCheckedEntries: boolean;
  form: FormGroup;
  formChangeTimer = {
    comment: +new Date(),
    hourlyRate: +new Date()
  };

  sm = new SubscriptionManager();
  accumulatedRate: number;

  /* istanbul ignore next */
  constructor(private service: TimeSheetService, private fb: FormBuilder) {
    this.form = this.fb.group({
      startTime: new FormControl(),
      endTime: new FormControl(),
      comment: new FormControl({value: '', disabled: true}),
      hourlyRate: new FormControl({value: 0, disabled: true})
    });
    this.form.disable();

    this.setSubscriptions();

    this.elapsedTimeInterval = setInterval(() =>
        this.setElapsedTime(),
      1000);
  }

  ngOnInit() {
    this.setNewTimeEntry();
  }

  ngOnDestroy(): void {
    clearInterval(this.elapsedTimeInterval);
    this.sm.unsubscribe();
  }

  async startTimer(): Promise<void> {
    if (!this.currentEntry.startTime) {
      this.currentEntry.startTime = new Date();
      /* istanbul ignore next */
      await this.service.create(this.currentEntry)
        .then((entry: TimeEntry) =>
          this.currentEntry = entry);
      this.entries.push(this.currentEntry);
      this.form.enable();
    }
  }

  async stopTimer(): Promise<void> {
    if (!this.currentEntry.endTime) {
      this.currentEntry.endTime = new Date();
      this.form.controls.comment.disable();
      await this.service.save(this.currentEntry)
        .then((entry: TimeEntry) =>
          this.currentEntry.endTime = entry.endTime);
      this.setNewTimeEntry();
    }
  }

  private setElapsedTime() {
    if (!this.hasCheckedEntries && this.entries) {
      this.entries.forEach(entry => {
        if (entry && entry.startTime && !entry.endTime) {
          // TODO: && Is the same user
          this.currentEntry = entry;
          Object.keys(this.form.controls)
            .forEach(key =>
              this.form.controls[key].setValue(entry[key]));
          this.form.enable();
        }
      });
      this.hasCheckedEntries = true;
    } else if (this.currentEntry && this.currentEntry.startTime) {
      const minutes = DateUtil.timeSince(this.currentEntry.startTime, 'm');
      this.elapsedTime = `${Math.floor(minutes / 60)}h ${minutes % 60}m`;

      this.accumulatedRate = minutes / 60 * this.currentEntry.hourlyRate;
    }
  }

  /* istanbul ignore next */
  isTimerRunning() {
    return this.currentEntry && this.currentEntry.startTime !== undefined;
  }

  /* istanbul ignore next */
  private setNewTimeEntry() {
    this.currentEntry = new TimeEntry(this.projectId, undefined);
  }

  /* istanbul ignore next */
  private setSubscriptions() {
    this.sm.add(
      this.form.controls.comment.valueChanges,
      value => this.handleManuallyTypedChange(value, 'comment', this.formChangeTimer.comment)
    );
    this.sm.add(
      this.form.controls.hourlyRate.valueChanges,
      value => this.handleManuallyTypedChange(value, 'hourlyRate', this.formChangeTimer.hourlyRate)
    );
  }

  private handleManuallyTypedChange(value, field: string, changeTimer: number) {
    if (this.isTimerRunning() && this.currentEntry) {
      this.currentEntry[field] = value;
      this.formChangeTimer[field] = +new Date();
      setTimeout(() => {
        if (DateUtil.timeSince(changeTimer, 's') >= 1) {
          this.service.save(this.currentEntry);
        }
      }, 1000);
    }
  }
}
