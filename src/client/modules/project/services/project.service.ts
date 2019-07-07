import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../../../../models/project.model';
import {BASE_ENDPOINT} from '../../../endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getAll(): Promise<Project[]> {
    return this.http.get(`${BASE_ENDPOINT}project`).toPromise() as Promise<Project[]>;
  }

  getById(id: number): Promise<Project[]> {
    return this.http.get(`${BASE_ENDPOINT}project/${id}`).toPromise() as Promise<Project[]>;
  }

  create(project: Project): Promise<Project[]> {
    return this.http.post(`${BASE_ENDPOINT}project`, project).toPromise() as Promise<Project[]>;
  }

  save(project: Project): Promise<Project[]> {
    return this.http.patch(`${BASE_ENDPOINT}project`, project).toPromise() as Promise<Project[]>;
  }
}
