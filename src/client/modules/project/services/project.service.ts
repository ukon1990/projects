import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project.model';
import {BASE_ENDPOINT} from '../../../endpoints';
import {BehaviorSubject} from 'rxjs';
import {ObjectUtil} from '@ukon1990/js-utilities';
import {BaseService} from '../../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService<Project> {

  constructor(http: HttpClient) {
    super(http, 'project');
  }
}
