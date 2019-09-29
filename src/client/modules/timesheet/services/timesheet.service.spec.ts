import {TestBed} from '@angular/core/testing';

import {TimeSheetService} from './time-sheet.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TimesheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: TimeSheetService = TestBed.get(TimeSheetService);
    expect(service).toBeTruthy();
  });
});
