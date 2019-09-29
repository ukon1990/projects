import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_ENDPOINT} from '../../../endpoints';
import {TimeEntry} from '../models/time-entry.model';
import {BaseService} from '../../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService extends BaseService<TimeEntry> {

  constructor(private http: HttpClient) {
    super(http, 'timesheet');
  }

  getForProject(id: any): Promise<TimeEntry[]> {
    return this.http.get(`${BASE_ENDPOINT}${this.rootPath}/project/${id}`)
      .toPromise() as Promise<TimeEntry[]>;
  }


}
