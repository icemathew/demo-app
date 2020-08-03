import { UserInfo } from './user-info.model';

export interface DataBase {
  token: string;
  users: Array<UserInfo>;
}
