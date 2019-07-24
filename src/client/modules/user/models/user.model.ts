import {UserMinimal} from './user-minimal.model';

export class User {
  id: number;

  constructor(
    public username: string,
    public email: string,
    public password?: string
  ) {
  }

  getMinimal(): UserMinimal {
    return new UserMinimal();
  }
}
