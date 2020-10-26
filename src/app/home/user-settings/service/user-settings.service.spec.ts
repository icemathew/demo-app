import { TestBed } from '@angular/core/testing';

import { Role } from '../../../model/role.model';
import { UserSettingsService } from './user-settings.service';

describe('UserSettingsService', () => {

  const ITEM = 'Item';
  const USER_INFO = {
    id: '1',
    name: 'name',
    lastName: 'lastName',
    role: Role.GUEST,
    login: 'login',
    pass: 'pass'
  };

  let service: UserSettingsService;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('should define method', () => {
    describe('saveSettings that should set on localStorage', () => {
        beforeEach(() => service.saveSettings(USER_INFO));

        it('user-name', () => expect(localStorage.setItem).toHaveBeenCalledWith('user-name1', USER_INFO.name));

        it('user-last-name', () => expect(localStorage.setItem).toHaveBeenCalledWith('user-last-name1', USER_INFO.lastName));

        it('user-role', () => expect(localStorage.setItem).toHaveBeenCalledWith('user-role1', USER_INFO.role));
    });
  });

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      providers: [
        UserSettingsService
      ]
    });

    service = TestBed.inject(UserSettingsService);
  }

  function createSpies(): void {
    spyOn(localStorage, 'setItem').and.callFake(() => null);
    spyOn(localStorage, 'getItem').and.callFake(() => ITEM);
  }

  function tearUp(): void {
    configureTestingModule();
    createSpies();
  }
});
