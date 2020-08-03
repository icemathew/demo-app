import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';

import { AuthService } from './common/auth.service';
import { RouterService } from './common/router.service';
import { Role } from './model/role.model';

@Injectable()
export class AppService {

  constructor(private authService: AuthService, private routerService: RouterService) {}

  checkToken(): void {
    this.authService.getToken()
        .subscribe((token: string) => {
            this.authService.setToken(token);
            this.compareToken(token);
        });
  }

  checkLoginLocation(event: NavigationEnd): boolean {
    return event && event.urlAfterRedirects === '/login';
  }

  getCurrentUserRole(): Role {
    const userId = localStorage.getItem('current-user-id');
    return userId ? Role[localStorage.getItem('user-role' + userId)] : null;
  }

  private compareToken(tokenDB: string): void {
    if (localStorage.getItem('demo-token') != null && localStorage.getItem('demo-token') === tokenDB) {
      this.routerService.goToHomePage();
    } else {
      this.routerService.goToLogin();
    }
  }
}
