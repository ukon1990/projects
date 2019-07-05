import {BaseRepository} from './base.repository';

describe('BaseRepository', () => {
  let repo: TestRepository;

  beforeAll(() => {
    repo = new TestRepository();
  });

  describe('insert', () => {

    expect(repo.insert(
      new TestModel(0, 'Larven Aldrimett')
    )).toBe('ASD');
  });

  describe('update', () => {

  });
});

class TestRepository extends BaseRepository<TestModel> {
  create(body: any) {
  }

  getAll() {
  }

  getById(id: number) {
  }

  save(id: number) {
  }
}

class TestModel {
  constructor(public id: number, public name: string) {
  }
}
