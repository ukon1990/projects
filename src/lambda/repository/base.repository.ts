import * as mysql from 'mysql';
import {Connection, MysqlError} from 'mysql';
import {DATABASE_CREDENTIALS} from '../credentials';
import {QueryUtil} from '../utils/query.util';

export abstract class BaseRepository<T> {
  private connection: Connection;

  constructor(public table?: string) {
  }

  /* istanbul ignore next */
  query(query: string): Promise<any> {
    this.connection = mysql.createConnection(DATABASE_CREDENTIALS);
    console.log(query);

    return new Promise<any>((resolve, reject) => {
      this.connection.connect((error) => {
        if (error) {
          reject({
            message: 'Could not connect to the database',
            error: 'Could not connect to the database',
            stack: error.stack
          });
          return;
        }

        this.connection.query(query, (err: MysqlError, rows: any[]) => {
          this.connection.end();

          if (err) {
            reject({message: 'Failed to execute the query', error: err.stack});
            return;
          }

          resolve(rows);
        });
      });
    });
  }

  /* istanbul ignore next */
  insert(object: T): Promise<T> {
    const query = new QueryUtil(this.table).insert(object);
    return this.query(query);
  }

  /* istanbul ignore next */
  update(id: number, object: T): Promise<T> {
    const query = new QueryUtil(this.table).update(id, object);
    return this.query(query);
  }

  /* istanbul ignore next */
  abstract create(body: any): Promise<T>;

  /* istanbul ignore next */
  abstract getAll(): Promise<T[]>;

  /* istanbul ignore next */
  abstract getById(id: number): Promise<T>;

  /* istanbul ignore next */
  abstract save(body: any): Promise<T>;
}
