import { Component, Input } from '@angular/core';

import { RouterService } from '../../common/router.service';
import { Role, RoleUtil } from '../../model/role.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

@Input() userRole: Role;

constructor(private routerService: RouterService) { }

  roleUtil = RoleUtil;

  logout(): void {
    localStorage.removeItem('demo-token');
    this.routerService.goToLogin();
  }

  goToUserSettings(): void {
    this.routerService.goToUserSettings();
  }

  goToInsurances(): void {
    this.routerService.goToInsurances();
  }

  goToCheckReports(): void {
    this.routerService.goToManager();
  }

}
