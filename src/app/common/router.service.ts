import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private static homeUrl = ['home', 'index'];
  private static insuranceUrl = ['home', 'insurances'];
  private static loginUrl = ['login'];
  private static managerUrl = ['home', 'manager'];
  private static settingsUrl = ['home', 'user-settings'];

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
