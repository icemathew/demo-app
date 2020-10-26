import { TranslateService } from '@ngx-translate/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { TestBed } from '@angular/core/testing';
import { TranslateConfigService } from './translate-config.service';

describe('TranslateConfigService', () => {

  let service: TranslateConfigService;
  let translateServiceMock: TranslateService;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('on init should call setDefaultLang', () => {
    expect(translateServiceMock.setDefaultLang).toHaveBeenCalled();
  });

  function createMocks(): void {
    translateServiceMock = new TranslateService(null, null, null, null, null, null, null, null, null);
    spyOn(translateServiceMock, 'setDefaultLang').and.callFake(() => '');
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      providers: [
        TranslateConfigService,
        {provide: TranslateService, useValue: translateServiceMock}
      ]
    });

    service = TestBed.inject(TranslateConfigService);
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }
});
