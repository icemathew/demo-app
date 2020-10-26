import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ManageInsurancesComponent } from './manager.component';

describe('ManageInsurancesComponent', () => {

  const INSURANCE = '{"userId":"1","date":null,"company":"Genesis","plate":"DJDSK","vehicleBrand":"Mazda2","vehicleModel":"2"}';

  let component: ManageInsurancesComponent;
  let fixture: ComponentFixture<ManageInsurancesComponent>;

  let translateServiceMock: TranslateService;

  beforeEach(() => tearUp());

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('on init should fill rowData', () => {
    component.ngOnInit();
    expect(component.rowData).toBeDefined();
  });

  function fillLocalStorage(): void {
    localStorage.setItem('insurances-1', INSURANCE);
  }

  function createMocks(): void {
    translateServiceMock = new TranslateService(null, null, null, null, null, null, null, null, null);
    spyOn(translateServiceMock, 'instant').and.callFake(() => '');
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      declarations: [
        ManageInsurancesComponent
      ],
      providers: [
        {provide: TranslateService, useValue: translateServiceMock}
      ],
      imports: [
        TranslateModule.forRoot({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
    fillLocalStorage();
  }
});
