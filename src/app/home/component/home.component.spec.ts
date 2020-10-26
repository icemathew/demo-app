import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeService } from '../service/home.service';

describe('HomeComponent', () => {

  const USERNAME = 'UserName';

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let homeServiceMock: HomeService;

  beforeEach(() => tearUp());

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {

    beforeEach(() => component.ngOnInit());

    it('gets username from home service', () => expect(homeServiceMock.getUserName).toHaveBeenCalled());

    it('sets username', () => expect(component.userName).toEqual(USERNAME));
  });

  function createMocks(): void {
    homeServiceMock = new HomeService();
    spyOn(homeServiceMock, 'getUserName').and.callFake(() => USERNAME);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        TranslateModule.forRoot({})
      ],
      providers: [
        {provide: HomeService, useValue: homeServiceMock}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }
});
