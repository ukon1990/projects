import * as mysql from 'mysql';
import {Connection, MysqlError} from 'mysql';
import {DATABASE_CREDENTIALS} from '../credentials';

export abstract class BaseRepository<T> {
  private connection: Connection;

  constructor(public table?: string) {
    if () {
      this.connection = mysql.createConnection(DATABASE_CREDENTIALS);
    }
  }

  query(query: string): Promise<any> {
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

  insert(object: T): string {
    return '';
  }

  update(object: T): string {
    return '';
  }

  abstract create(body: any);

  abstract getAll();

  abstract getById(id: number);

  abstract save(id: number);
}
