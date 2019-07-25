import {UserMinimal} from './user-minimal.model';

export class User {
  id: number;
  hourlyRate: number;

  constructor(
    public displayName: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password?: string
  ) {
  }

  getMinimal(): UserMinimal {
    return new UserMinimal(this.id, this.displayName);
  }
}
