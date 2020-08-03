import { Injectable } from '@angular/core';

import { Role } from '../../../model/role.model';
import { UserInfo } from '../../../model/user-info.model';

@Injectable()
export class UserSettingsService {

  constructor() {}

  saveSettings(userInfo: UserInfo): void {
    localStorage.setItem('user-name' + userInfo.id, userInfo.name);
    localStorage.setItem('user-last-name' + userInfo.id, userInfo.lastName);
    localStorage.setItem('user-role' + userInfo.id, userInfo.role);
  }

  fillUserInfo(userInfo: UserInfo): void {
    userInfo.id = localStorage.getItem('current-user-id');
    userInfo.name = localStorage.getItem('user-name' + userInfo.id);
    userInfo.lastName = localStorage.getItem('user-last-name' + userInfo.id);
    userInfo.role = Role[localStorage.getItem('user-role' + userInfo.id)];
  }
}
