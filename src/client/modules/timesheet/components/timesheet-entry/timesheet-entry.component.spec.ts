import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimesheetEntryComponent} from './timesheet-entry.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimeSheetService} from '../../services/time-sheet.service';
import {TimeEntry} from '../../models/time-entry.model';
import {User} from '../../../user/models/user.model';
/*
class MockService {
  constructor(){}

  create()
}*/

describe('TimesheetEntryComponent', () => {
  let component: TimesheetEntryComponent;
  let fixture: ComponentFixture<TimesheetEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetEntryComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        HttpClientTestingModule,
        MatInputModule,
        BrowserAnimationsModule
      ], providers: [
        // SpyHelper.provideMagicalMock(TimeSheetService)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.currentEntry).toBeTruthy();
    expect(component.form.enabled).toBeFalsy();
  });

  describe('startTimer', () => {
    it('can start when currentEntry is not set', async (done) => {
      component.entries = [];
      await component.startTimer().finally(() => {
        expect(component.currentEntry.startTime).toBeTruthy();
        expect(component.entries.length).toBe(1);
        expect(component.form.enabled).toBeTruthy();
        done();
      });
    });

    it('If a timer is already started, it should not start a new one', async (done) => {
      const originalTime = new Date();
      component.currentEntry = new TimeEntry(
        -1, new User(null, null, null, null, null));
      component.currentEntry.startTime = originalTime;
      component.entries = [];
      await component.startTimer()
        .finally(() => {
          expect(component.currentEntry.startTime).toBe(originalTime);
          expect (component.entries.length).toBe(0);
          done();
        });
    });
  });

  describe('stopTimer', () => {
  });
});
