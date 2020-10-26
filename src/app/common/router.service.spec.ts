import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';

describe('RouterService', () => {

  let service: RouterService;
  let router: Router;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('should define method', () => {
    it('goToHomePage that navigates to homeUrl', () => {
      service.goToHomePage();
      expect(router.navigate).toHaveBeenCalledWith(RouterService.homeUrl);
    });

    it('goToInsurances that navigates to insuranceUrl', () => {
      service.goToInsurances();
      expect(router.navigate).toHaveBeenCalledWith(RouterService.insuranceUrl);
    });

    it('goToLogin that navigates to loginUrl', () => {
      service.goToLogin();
      expect(router.navigate).toHaveBeenCalledWith(RouterService.loginUrl);
    });

    it('goToManager that navigates to managerUrl', () => {
      service.goToManager();
      expect(router.navigate).toHaveBeenCalledWith(RouterService.managerUrl);
    });

    it('goToUserSettings that navigates to settingsUrl', () => {
      service.goToUserSettings();
      expect(router.navigate).toHaveBeenCalledWith(RouterService.settingsUrl);
    });
  });

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        RouterService
      ]
    });

    service = TestBed.inject(RouterService);
    router = TestBed.inject(Router);
  }

  function createSpies(): void {
    spyOn(router, 'navigate').and.callFake(() => null);
  }

  function tearUp(): void {
    configureTestingModule();
    createSpies();
  }
});
