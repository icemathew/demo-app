import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Role } from './model/role.model';
import { TranslateConfigService } from './translate/service/translate-config.service';

describe('AppComponent', () => {

  const ROLE = Role.ADMIN;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let appServiceMock: AppService;
  let translateConfigServiceMock: TranslateConfigService;
  let routerEvents;

  beforeEach(() => tearUp());

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('on init should checkToken', () => {
    component.ngOnInit();
    expect(appServiceMock.checkToken).toHaveBeenCalled();
  });

  it('when navigates to another page, gets role', () => {
    const event = new NavigationEnd(1, '/login', '/login');
    routerEvents.next(event);
    expect(component.userRole).toEqual(ROLE);
  });

  it('if event isn\'t a NavigationEnd event does nothing', () => {
    const event = new NavigationStart(1, '/login');
    routerEvents.next(event);
    expect(appServiceMock.getCurrentUserRole).not.toHaveBeenCalled();
  });

  function createMocks(): void {
    appServiceMock = new AppService(null, null);
    spyOn(appServiceMock, 'checkToken').and.callFake(() => null);
    spyOn(appServiceMock, 'getCurrentUserRole').and.callFake(() => ROLE);

    const translateServiceMock = new TranslateService(null, null, null, null, null, null, null, null, null);
    spyOn(translateServiceMock, 'setDefaultLang').and.callFake(() => '');

    translateConfigServiceMock = new TranslateConfigService(translateServiceMock);
    spyOn(translateConfigServiceMock, 'setDefaultLanguage').and.callFake(() => '');
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: AppService, useValue: appServiceMock},
        {provide: TranslateConfigService, useValue: translateConfigServiceMock}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    routerEvents = TestBed.inject(Router).events;
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }

});
