import {QueryUtil} from './query.util';

class TestModel {
  constructor(public id: number, public name: string, public isTrue: boolean, list: any[]) {
  }
}

describe('QueryUtil', () => {
  const util = new QueryUtil<TestModel>('test_table');
  describe('can generate query', () => {
    it('insert', () => {
      const obj = new TestModel(
        0,
        'Testing',
        false,
        ['Stuff', 'is', 'good']
      );
      expect(util.insert(obj))
        .toBe('INSERT INTO test_table(id,name,isTrue) ' +
          'VALUES(0,"Testing",0);');
    });

    it('insert with true bool', () => {
      const obj = new TestModel(
        0,
        'Testing',
        true,
        ['Stuff', 'is', 'good']
      );
      expect(util.insert(obj))
        .toBe('INSERT INTO test_table(id,name,isTrue) ' +
          'VALUES(0,"Testing",1);');
    });

    it('update', () => {
      const obj = new TestModel(
        0,
        'Testing',
        false,
        ['Stuff', 'is', 'good']
      );
      expect(util.update(obj.id, obj))
        .toBe('UPDATE test_table ' +
          'SET id = 0,' +
          'SET name = "Testing",' +
          'SET isTrue = 0 ' +
          'WHERE id = 0;');
    });
  });
});
