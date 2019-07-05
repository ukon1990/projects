import {BaseRepository, RepositoryTemplate} from './base.repository';

export class ProjectRepository extends BaseRepository implements RepositoryTemplate {
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
