import {User} from '../../user/models/user.model';
import {UserMinimal} from '../../user/models/user-minimal.model';

export class TimeEntry {
  id?: number;
  startTime: Date;
  endTime: Date;
  user: UserMinimal;
  hourlyRate: number;

  constructor(public projectId: number, user: User) {
  }
}
