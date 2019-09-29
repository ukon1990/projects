import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeSheetComponent} from './time-sheet.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TimesheetEntryComponent} from '../timesheet-entry/timesheet-entry.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('TimesheetComponent', () => {
  let component: TimeSheetComponent;
  let fixture: ComponentFixture<TimeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSheetComponent, TimesheetEntryComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatListModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 123})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
