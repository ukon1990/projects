export class BaseRepository {
  constructor(public table: string) {
  }
}

export interface RepositoryTemplate {
  getAll();

  getById(id: number);

  save(id: number);

  create(body: any);
}
