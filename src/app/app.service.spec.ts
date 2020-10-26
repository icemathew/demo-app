import { of } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { Role } from './model/role.model';

import { AppService } from './app.service';
import { AuthService } from './common/auth.service';
import { RouterService } from './common/router.service';

describe('AppService', () => {

  const TOKEN = 'CorrectToken';
  const ADMIN_ROLE = 'ADMIN';

  let service: AppService;
  let authServiceMock: AuthService;
  let routerServiceMock: RouterService;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('should define method', () => {
    describe('checkLoginLocation that check if url is login', () => {
        it('if event is null returns false', () => {
            expect(service.checkLoginLocation(null)).toBeFalsy();
        });

        it('if event doesn\'t go to login returns false', () => {
            const homeNav = new NavigationEnd(1, '/home', '/user');
            expect(service.checkLoginLocation(homeNav)).toBeFalsy();
        });

        it('if event goes to login returns true', () => {
            const loginNav = new NavigationEnd(1, '/home', '/login');
            expect(service.checkLoginLocation(loginNav)).toBeTruthy();
        });
    });

    describe('getCurrentUserRole that returns', () => {
        it('null if hasn\'t user on localStorage', () => {
            spyOn(localStorage, 'getItem').and.callFake(() => null);
            expect(service.getCurrentUserRole()).toBeNull();
        });

        it('role of user on localStorage', () => {
            spyOn(localStorage, 'getItem').and.callFake(() => ADMIN_ROLE);
            expect(service.getCurrentUserRole()).toEqual(Role.ADMIN);
        });
    });

    describe('checkToken that', () => {
        it('sets token through AuthService', () => {
            service.checkToken();
            expect(authServiceMock.setToken).toHaveBeenCalled();
        });

        it('goes to home page if token is correct', () => {
            spyOn(localStorage, 'getItem').and.callFake(() => TOKEN);
            service.checkToken();
            expect(routerServiceMock.goToHomePage).toHaveBeenCalled();
        });

        it('goes to Login if doesn\'t have token', () => {
            spyOn(localStorage, 'getItem').and.callFake(() => null);
            service.checkToken();
            expect(routerServiceMock.goToLogin).toHaveBeenCalled();
        });
    });
  });

  function createMocks(): void {
    authServiceMock = new AuthService(null);
    spyOn(authServiceMock, 'getToken').and.callFake(() => of(TOKEN));
    spyOn(authServiceMock, 'setToken').and.callFake(() => null);

    routerServiceMock = new RouterService(null);
    spyOn(routerServiceMock, 'goToHomePage').and.callFake(() => null);
    spyOn(routerServiceMock, 'goToLogin').and.callFake(() => null);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      providers: [
        AppService,
        {provide: AuthService, useValue: authServiceMock},
        {provide: RouterService, useValue: routerServiceMock}
      ]
    });

    service = TestBed.inject(AppService);
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }
});
