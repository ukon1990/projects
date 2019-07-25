import {BaseRepository} from './base.repository';
import {EmptyUtil, ObjectUtil} from '@ukon1990/js-utilities';
import {TimeEntry} from '../../client/modules/timesheet/models/time-entry.model';

export class TimeEntryRepository extends BaseRepository<TimeEntry> {
  constructor() {
    super('time_entry');
  }

  /* istanbul ignore next */
  async create(entry: TimeEntry): Promise<TimeEntry> {
    entry.startTime = new Date(entry.startTime);
    await this.insert(entry)
      .then(async (row: any) => {
        await this.getById(row.insertId)
          .then((t: TimeEntry) => ObjectUtil.overwrite(t, entry))
          .catch(console.error);
      })
      .catch(console.error);
    return entry;
  }

  /* istanbul ignore next */
  getAll(): Promise<TimeEntry[]> {
    return this.query(`SELECT *
                              FROM ${this.table};`);
  }

  /* istanbul ignore next */
  getAllForProject(id: number): Promise<TimeEntry[]> {
    return this.query(`SELECT *
                              FROM ${this.table}
                              WHERE projectId = ${id};`);
  }

  /* istanbul ignore next */
  getAllForUser(id: number): Promise<TimeEntry[]> {
    return this.query(`SELECT *
                              FROM ${this.table}
                              WHERE projectId = ${id};`);
  }

  /* istanbul ignore next */
  getById(id: number): Promise<TimeEntry> {
    return this.query(`SELECT *
                              FROM ${this.table}
                              WHERE id = ${id};`)
      .then(r => r[0]);
  }

  /* istanbul ignore next */
  async save(entry: TimeEntry): Promise<TimeEntry> {
    entry.startTime = new Date(entry.startTime);
    entry.endTime = new Date();
    if (EmptyUtil.isNullOrUndefined(entry.hourlyRate)) {
      entry.hourlyRate = 0;
    }

    await this.update(entry.id, entry);
    return entry;
  }
}
