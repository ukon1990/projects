import {TimeEntry} from '../../timesheet/models/time-entry.model';
import {User} from '../../user/models/user.model';
import {Customer} from '../../customer/models/customer.model';

export class Project {
  id?: number;
  parentId?: number;
  created: Date;
  updated: Date;
  timeEntries: TimeEntry[] = [];
  defaultHourlyRate: number;
  customers: Customer[] = [];
  users?: User[];

  constructor(public name: string, public description?: string) {
  }
}
