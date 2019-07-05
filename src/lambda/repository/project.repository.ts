import {BaseRepository} from './base.repository';
import {Project} from '../../models/project.model';

export class ProjectRepository extends BaseRepository<Project> {
  constructor() {
    super('project');
  }

  create(body: any) {
  }

  getAll() {
  }

  getById(id: number) {
  }

  save(id: number) {
  }
}
