export class QueryUtil<T> {
  constructor(private table: string) {
  }

  update(id: number, object: T): string {
    const cv = this.getColumnsAndValues(object);
    let query = `UPDATE ${this.table} `;

    query += cv.columns
      .map((column, index) =>
        `SET ${column} = ${cv.values[index]}`)
      .join(',');

    return `${query} WHERE id = ${id};`;
  }

  insert(object: T): string {
    const cv = this.getColumnsAndValues(object);
    return `INSERT INTO ${this.table}(${cv.columns.join(',')}) VALUES(${cv.values.join(',')});`;
  }

  private getColumnsAndValues(object: T) {
    const columns = [];
    const values = [];

    Object.keys(object)
      .forEach(k => {
        columns.push(k);
        values.push(this.getSQLFriendlyString(object[k]));
      });
    return {
      columns, values
    };
  }

  private getSQLFriendlyString(value: any): string | number {
    const type = typeof value;
    switch (type) {
      case 'number':
        return value;
      case 'boolean':
        return value ? 1 : 0;
      default:
        return `"${value}"`;
    }
  }
}
