import { Component, OnInit } from '@angular/core';

import { RouterService } from '../../../common/router.service';
import { UserInfo, UserInfoInitialState } from '../../../model/user-info.model';
import { UserSettingsService } from '../service/user-settings.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent implements OnInit {

  userInfo: UserInfo;

  constructor(
    private routerService: RouterService,
    private userSettingsService: UserSettingsService
  ) { }

  ngOnInit(): void {
    this.userInfo = UserInfoInitialState;
    this.userSettingsService.fillUserInfo(this.userInfo);
  }

  changeUserSettings(): void {
    this.userSettingsService.saveSettings(this.userInfo);
    this.routerService.goToHomePage();
  }

}
