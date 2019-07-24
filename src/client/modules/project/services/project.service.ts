import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project.model';
import {BASE_ENDPOINT} from '../../../endpoints';
import {BehaviorSubject} from 'rxjs';
import {ObjectUtil} from '@ukon1990/js-utilities';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: BehaviorSubject<Project[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  /* istanbul ignore next */
  async getAll(): Promise<Project[]> {
    return this.http.get(`${BASE_ENDPOINT}project`)
      .toPromise()
      .then((projects: Project[]) => {
        this.projects.next(projects);
      }) as Promise<Project[]>;
  }

  /* istanbul ignore next */
  getById(id: number): Promise<Project[]> {
    return this.http.get(`${BASE_ENDPOINT}project/${id}`).toPromise() as Promise<Project[]>;
  }

  /* istanbul ignore next */
  create(project: Project): Promise<Project> {
    return this.http.post(`${BASE_ENDPOINT}project`, project).toPromise() as Promise<Project>;
  }

  /* istanbul ignore next */
  save(project: Project): Promise<Project> {
    return this.http.patch(`${BASE_ENDPOINT}project`, project).toPromise()
      .then((p: Project) =>
        ObjectUtil.overwrite(p, project)) as Promise<Project>;
  }
}
