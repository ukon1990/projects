import {TestBed} from '@angular/core/testing';

import {TimesheetService} from './timesheet.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TimesheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: TimesheetService = TestBed.get(TimesheetService);
    expect(service).toBeTruthy();
  });
});
