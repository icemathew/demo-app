import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TestBed } from '@angular/core/testing';

import { AuthService } from '../../common/auth.service';
import { LoginService } from './login.service';

describe('LoginService', () => {

  const CORRECT_USER = {
     login: 'login',
     pass: 'pass'
  };

  const WRONG_USER = {
     login: 'error',
     pass: 'pass'
  };

  const NAME = 'Common';

  const USERS_DB = {
    users: [
        {
            id: 1,
            login: 'login',
            pass: 'pass',
            role: 'USER',
            name: NAME,
            lastName: 'User'
        }
    ]
  };

  let service: LoginService;
  let authServiceMock: AuthService;
  let toastServiceMock: ToastrService;
  let translateServiceMock: TranslateService;

  let httpMock;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('should define method loginValidation that check login and', () => {
    it('shows error if it is invalid', () => {
        service.loginValidation(WRONG_USER);
        const req = httpMock.expectOne('assets/db/db.json');
        req.flush(USERS_DB);
        expect(req.request.method).toBe('GET');
        expect(toastServiceMock.error).toHaveBeenCalled();
    });

    it('save token on localStorage', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => null);
        service.loginValidation(CORRECT_USER);
        const req = httpMock.expectOne('assets/db/db.json');
        req.flush(USERS_DB);
        expect(req.request.method).toBe('GET');
        expect(authServiceMock.setTokenLocalStorage).toHaveBeenCalled();
    });

    it('if user exists doesn\'t save it on localStorage', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => CORRECT_USER.login);
        service.loginValidation(CORRECT_USER);
        const req = httpMock.expectOne('assets/db/db.json');
        req.flush(USERS_DB);
        expect(localStorage.setItem).not.toHaveBeenCalledWith('user-name1', NAME);
    });
  });

  function createMocks(): void {
    authServiceMock = new AuthService(null);
    spyOn(authServiceMock, 'setTokenLocalStorage').and.callFake(() => null);

    translateServiceMock = new TranslateService(null, null, null, null, null, null, null, null, null);
    spyOn(translateServiceMock, 'instant').and.callFake(() => '');

    spyOn(localStorage, 'setItem').and.callFake(() => null);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        ToastrService,
        {provide: TranslateService, useValue: translateServiceMock},
        {provide: AuthService, useValue: authServiceMock}
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot()
       ]
    });

    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
    toastServiceMock = TestBed.inject(ToastrService);
    spyOn(toastServiceMock, 'error').and.callFake(() => null);
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }
});
