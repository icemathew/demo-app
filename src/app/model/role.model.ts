export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST'
}

export class RoleUtil {
  static isAdmin(role: Role): boolean {
    return role === Role.ADMIN;
  }

  static isUser(role: Role): boolean {
    return role === Role.USER;
  }

  static isGuest(role: Role): boolean {
    return role === Role.GUEST;
  }
}
