import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { UserSettingsComponent } from './user-settings.component';
import { RouterService } from '../../../common/router.service';
import { UserSettingsService } from '../service/user-settings.service';

describe('UserSettingsComponent', () => {

  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  let routerServiceMock: RouterService;
  let userSettingsServiceMock: UserSettingsService;

  beforeEach(() => tearUp());

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('should define method changeUserSettings that', () => {
    beforeEach(() => component.changeUserSettings());

    it('save settings', () => expect(userSettingsServiceMock.saveSettings).toHaveBeenCalledWith(component.userInfo));

    it('go to home page', () => expect(routerServiceMock.goToHomePage).toHaveBeenCalled());
  });

  function createMocks(): void {
    routerServiceMock = new RouterService(null);
    spyOn(routerServiceMock, 'goToHomePage').and.callFake(() => null);

    userSettingsServiceMock = new UserSettingsService();
    spyOn(userSettingsServiceMock, 'saveSettings').and.callFake(() => null);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      declarations: [
        UserSettingsComponent
      ],
      providers: [
        {provide: RouterService, useValue: routerServiceMock},
        {provide: UserSettingsService, useValue: userSettingsServiceMock}
      ],
      imports: [
        TranslateModule.forRoot({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }
});
