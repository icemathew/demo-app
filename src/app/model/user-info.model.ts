import { Role } from './role.model';
import { User } from './user.model';

export interface UserInfo extends User {
  id?: string;
  name: string;
  lastName: string;
  role?: Role;
}

export const UserInfoInitialState: UserInfo = {
  login: null,
  pass: null,
  name: null,
  lastName: null,
  role: null
};
