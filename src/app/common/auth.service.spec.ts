import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

  const TOKEN = 'CorrectToken';

  let service: AuthService;
  let httpMock;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('should define method', () => {
      describe('getToken that', () => {
        it('creates fake token', () => {
            service.getToken();
            expect(localStorage.getItem('token')).toBeDefined();
        });

        it('returns user token', () => {
            service.getToken().subscribe();
            const req = httpMock.expectOne('assets/db/db.json');
            req.flush(TOKEN);
            expect(req.request.method).toBe('GET');
        });
      });

      it('setToken, setTokenLocalStorage and checkToken that verify correct token', () => {
        service.setToken(TOKEN);
        service.setTokenLocalStorage();
        expect(service.checkToken()).toBeTruthy();
      });
  });

  function createMocks(): void {
    httpMock = TestBed.inject(HttpTestingController);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      providers: [
        AuthService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(AuthService);
  }

  function tearUp(): void {
    configureTestingModule();
    createMocks();
  }
});
