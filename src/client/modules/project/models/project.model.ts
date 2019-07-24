import {TimeEntry} from '../../timesheet/models/time-entry.model';
import {User} from '../../user/models/user.model';

export class Project {
  id?: number;
  parentId?: number;
  created: Date;
  updated: Date;
  timeEntries: TimeEntry[] = [];
  users?: User;

  constructor(public name: string, public description?: string) {
  }
}
