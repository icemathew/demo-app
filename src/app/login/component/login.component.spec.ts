import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';
import { LoginService } from '../service/login.service';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let loginServiceMock: LoginService;

  beforeEach(() => tearUp());

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('should define method checkCredentials that', () => {
    it('if user has no value does nothing', () => {
        component.user = { login: null, pass: null};
        component.checkCredentials();
        expect(loginServiceMock.loginValidation).not.toHaveBeenCalled();
    });

    it('if user has value calls loginValidation', () => {
        component.user = { login: 'login', pass: 'pass'};
        component.checkCredentials();
        expect(loginServiceMock.loginValidation).toHaveBeenCalledWith(component.user);
    });
  });

  function createMocks(): void {
    loginServiceMock = new LoginService(null, null, null, null, null);
    spyOn(loginServiceMock, 'loginValidation').and.callFake(() => null);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      providers: [
        {provide: LoginService, useValue: loginServiceMock}
      ],
      imports: [
        TranslateModule.forRoot({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }
});
