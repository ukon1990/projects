import * as mysql from 'mysql';
import {Connection, MysqlError} from 'mysql';
import {DATABASE_CREDENTIALS} from '../credentials';
import {QueryUtil} from '../utils/query.util';

export abstract class BaseRepository<T> {
  private connection: Connection;

  constructor(public table?: string) {
    this.connection = mysql.createConnection(DATABASE_CREDENTIALS);
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

  insert(object: T): Promise<T> {
    const query = new QueryUtil(this.table).insert(object);
    return this.query(query);
  }

  update(id: number, object: T): Promise<T> {
    const query = new QueryUtil(this.table).update(id, object);
    return this.query(query);
  }

  abstract create(body: any): Promise<T>;

  abstract getAll(): Promise<T[]>;

  abstract getById(id: number): Promise<T>;

  abstract save(body: any): Promise<T>;
}
