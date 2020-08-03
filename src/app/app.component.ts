import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AppService } from './app.service';
import { Role } from './model/role.model';
import { TranslateConfigService } from './translate/service/translate-config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  showSideBar: boolean;
  userRole: Role;

  constructor(
      private appService: AppService,
      private translateConfigService: TranslateConfigService,
      private router: Router
  ) {
  router.events
    .subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSideBar = !this.appService.checkLoginLocation(event);
        this.userRole = this.appService.getCurrentUserRole();
      }
    });
  }

  ngOnInit(): void {
    this.appService.checkToken();
  }
}
