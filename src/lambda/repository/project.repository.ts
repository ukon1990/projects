import {BaseRepository} from './base.repository';
import {Project} from '../../client/modules/project/models/project.model';

export class ProjectRepository extends BaseRepository<Project> {
  constructor() {
    super('project');
  }

  /* istanbul ignore next */
  create(project: Project): Promise<Project> {
    return this.insert(project);
  }

  /* istanbul ignore next */
  getAll(): Promise<Project[]> {
    return this.query(`SELECT * from ${this.table}`);
  }

  /* istanbul ignore next */
  getById(id: number): Promise<Project> {
    return this.query(`SELECT * from ${this.table}`)
      .then(r => r[0]);
  }

  /* istanbul ignore next */
  save(project: Project): Promise<Project> {
    return this.update(project.id, project);
  }
}
