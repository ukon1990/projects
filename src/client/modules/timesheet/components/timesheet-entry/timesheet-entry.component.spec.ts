import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimesheetEntryComponent} from './timesheet-entry.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimesheetService} from '../../timesheet.service';
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
        // SpyHelper.provideMagicalMock(TimesheetService)
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

  describe('startTimer', async () => {
    it('can start when currentEntry is not set', () => {
      component.entries = [];
      component.startTimer();
      expect(component.currentEntry.startTime).toBeTruthy();
      expect(component.entries.length).toBe(1);
      expect(component.form.enabled).toBeTruthy();
    });
  });

  describe('stopTimer', () => {});
});
