import { Role, RoleUtil } from './role.model';

describe('RoleUtil', () => {

  it('should check if role is Admin', () => {
    expect(RoleUtil.isAdmin(Role.ADMIN)).toBeTruthy();
  });

  it('should check if role is User', () => {
    expect(RoleUtil.isUser(Role.USER)).toBeTruthy();
  });

  it('should check if role is Guest', () => {
    expect(RoleUtil.isGuest(Role.GUEST)).toBeTruthy();
  });
});
