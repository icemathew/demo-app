import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  static homeUrl = ['home', 'index'];
  static insuranceUrl = ['home', 'insurances'];
  static loginUrl = ['login'];
  static managerUrl = ['home', 'manager'];
  static settingsUrl = ['home', 'user-settings'];

  constructor(private router: Router) {}

  goToHomePage(): void {
    this.router.navigate(RouterService.homeUrl);
  }

  goToInsurances(): void {
    this.router.navigate(RouterService.insuranceUrl);
  }

  goToLogin(): void {
    this.router.navigate(RouterService.loginUrl);
  }

  goToManager(): void {
    this.router.navigate(RouterService.managerUrl);
  }

  goToUserSettings(): void {
    this.router.navigate(RouterService.settingsUrl);
  }
}
