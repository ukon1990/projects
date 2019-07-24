import {User} from './user.model';

describe('UserModel', () => {
  describe('getMinimal', () => {
    it('can create a minimal version of a user', () => {
      const user = new User('juju', '');
      const minimalUser = user.getMinimal();
      expect();
    });
  });
});
