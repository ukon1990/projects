import {BaseRepository} from './base.repository';
import {Project} from '../../client/modules/project/models/project.model';
import {ObjectUtil} from '@ukon1990/js-utilities';

export class ProjectRepository extends BaseRepository<Project> {
  constructor() {
    super('project');
  }

  /* istanbul ignore next */
  async create(project: Project): Promise<Project> {
    project.created = new Date();
    project.updated = new Date();
    await this.insert(project)
      .then(async (row: any) => {
        await this.getById(row.insertId)
          .then((p: Project) => ObjectUtil.overwrite(p, project))
          .catch(console.error);
      })
      .catch(console.error);
    return project;
  }

  /* istanbul ignore next */
  getAll(): Promise<Project[]> {
    return this.query(`SELECT * from ${this.table};`);
  }

  /* istanbul ignore next */
  getById(id: number): Promise<Project> {
    return this.query(`SELECT * FROM ${this.table} WHERE id = ${id};`)
      .then(r => r[0]);
  }

  /* istanbul ignore next */
  async save(project: Project): Promise<Project> {
    project.updated = new Date();
    await this.update(project.id, project);
    return project;
  }
}
