import {QueryUtil} from './query.util';

class TestModel {
  constructor(
    public id: number,
    public name: string,
    public isTrue: boolean,
    public list: any[],
    public date: any) {
  }
}

describe('QueryUtil', () => {
  const util = new QueryUtil<TestModel>('test_table');
  describe('insert', () => {
    it('default', () => {
      const obj = new TestModel(
        0,
        'Testing',
        false,
        ['Stuff', 'is', 'good'],
        new Date()
      );
      expect(util.insert(obj))
        .toBe('INSERT INTO test_table(id,name,isTrue,date) ' +
          'VALUES(0,"Testing",0,' + +obj.date + ');');
    });

    it('insert with true bool', () => {
      const obj = new TestModel(
        0,
        'Testing',
        true,
        ['Stuff', 'is', 'good'],
        new Date()
      );
      expect(util.insert(obj))
        .toBe('INSERT INTO test_table(id,name,isTrue,date) ' +
          'VALUES(0,"Testing",1,' + +obj.date + ');');
    });

    it('insert with undefined', () => {
      const obj = new TestModel(
        0,
        'Testing',
        true,
        ['Stuff', 'is', 'good'],
        null
      );
      expect(util.insert(obj))
        .toBe('INSERT INTO test_table(id,name,isTrue,date) ' +
          'VALUES(0,"Testing",1,null);');
    });

    it('insert with object', () => {
      const obj = new TestModel(
        0,
        'Testing',
        true,
        ['Stuff', 'is', 'good'],
        {name: 'test'}
      );
      expect(util.insert(obj))
        .toBe('INSERT INTO test_table(id,name,isTrue,date) ' +
          'VALUES(0,"Testing",1,"{\"name\":\"test\"}");');
    });
  });

  describe('update', () => {
    it('update', () => {
      const obj = new TestModel(
        0,
        'Testing',
        false,
        ['Stuff', 'is', 'good'],
        new Date()
      );
      expect(util.update(obj.id, obj))
        .toBe('UPDATE test_table ' +
          'SET id = 0,' +
            'name = "Testing",' +
            'isTrue = 0,' +
            'date = ' + +obj.date + ' ' +
          'WHERE id = 0;');
    });
  });
});
