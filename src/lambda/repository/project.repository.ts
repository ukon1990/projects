import {BaseRepository} from './base.repository';
import {Project} from '../../models/project.model';

export class ProjectRepository extends BaseRepository<Project> {
  constructor() {
    super('project');
  }

  create(project: Project): Promise<Project> {
    return this.insert(project);
  }

  getAll(): Promise<Project[]> {
    return this.query(`SELECT * from ${this.table}`);
  }

  getById(id: number): Promise<Project> {
    return this.query(`SELECT * from ${this.table}`)
      .then(r => r[0]);
  }

  save(project: Project): Promise<Project> {
    return this.update(project.id, project);
  }
}
