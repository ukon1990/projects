import {User} from './user.model';

describe('UserModel', () => {
  describe('getMinimal', () => {
    it('can create a minimal version of a user', () => {
      const user = new User('juju', 'mail@mail.mail', '', '', '');
      user.id = 1;
      const minimalUser = user.getMinimal();

      console.log(minimalUser, user);
      expect(minimalUser.id).toBe(user.id);
      expect(minimalUser.name).toBe(user.displayName);
    });
  });
});
