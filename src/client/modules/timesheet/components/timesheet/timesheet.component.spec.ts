import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimesheetComponent} from './timesheet.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TimesheetEntryComponent} from '../timesheet-entry/timesheet-entry.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('TimesheetComponent', () => {
  let component: TimesheetComponent;
  let fixture: ComponentFixture<TimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetComponent, TimesheetEntryComponent],
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
    fixture = TestBed.createComponent(TimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
