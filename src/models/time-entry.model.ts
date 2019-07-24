export class TimeEntry {
  id?: number;
  startTime: Date;
  endTime: Date;
  userId: number;

  constructor(public projectId: number) {
  }
}
