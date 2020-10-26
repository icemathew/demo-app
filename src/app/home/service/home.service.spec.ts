import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {

  const USER = 'CurrentUser';
  let service: HomeService;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should define method getUserName that returns user name from localStorage', () => {
    expect(service.getUserName()).toEqual(USER);
  });

  function createSpies(): void {
    spyOn(localStorage, 'getItem').and.callFake(() => USER);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      providers: [
        HomeService
      ]
    });
    service = TestBed.inject(HomeService);
  }

  function tearUp(): void {
    configureTestingModule();
    createSpies();
  }
});
