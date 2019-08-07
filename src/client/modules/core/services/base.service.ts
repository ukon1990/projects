import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_ENDPOINT} from '../../../endpoints';
import {BehaviorSubject} from 'rxjs';
import {EmptyUtil, ObjectUtil} from '@ukon1990/js-utilities';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  list: BehaviorSubject<T[]> = new BehaviorSubject([]);

  constructor(private h: HttpClient, public rootPath?: string) {
  }

  /* istanbul ignore next */
  async getAll(): Promise<T[]> {
    const url = `${BASE_ENDPOINT}${this.rootPath}`;
    console.log(url);
    return this.h.get(url)
      .toPromise()
      .then((data: T[]) => {
        this.list.next(data);
        return data;
      }) as Promise<T[]>;
  }

  /* istanbul ignore next */
  getById(id: number): Promise<T> {
    return this.h.get(`${BASE_ENDPOINT}${this.rootPath}/${id}`).toPromise() as Promise<T>;
  }

  /* istanbul ignore next */
  create(data: T): Promise<T> {
    const url = `${BASE_ENDPOINT}${this.rootPath}`;
    console.log(data, url);
    return this.h.post(url, data).toPromise() as Promise<T>;
  }

  /* istanbul ignore next */
  save(data: T): Promise<T> {
    if (EmptyUtil.isNullOrUndefined(data)) {
      return;
    }
    return this.h.patch(`${BASE_ENDPOINT}${this.rootPath}`, data).toPromise()
      .then((d: T) => {
        if (!EmptyUtil.isNullOrUndefined(d)) {
          return ObjectUtil.overwrite(d, data);
        }
        return d;
      }) as Promise<T>;
  }
}
