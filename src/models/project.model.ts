export class Project {
  id?: number;
  parentId?: number;

  constructor(public name: string, public description?: string) {
  }
}
