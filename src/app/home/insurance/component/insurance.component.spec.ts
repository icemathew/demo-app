import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { InsuranceComponent } from './insurance.component';
import { InsuranceService } from '../service/insurance.service';

describe('InsuranceComponent', () => {

  let component: InsuranceComponent;
  let fixture: ComponentFixture<InsuranceComponent>;

  let insuranceServiceMock: InsuranceService;

  beforeEach(() => tearUp());

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should define method createReport that creates a report of the insurance', () => {
    component.createReport();
    expect(insuranceServiceMock.createReport).toHaveBeenCalledWith(component.insurance);
  });

  function createMocks(): void {
    insuranceServiceMock = new InsuranceService(null);
    spyOn(insuranceServiceMock, 'createReport').and.callFake(() => null);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      declarations: [
        InsuranceComponent
      ],
      providers: [
        {provide: InsuranceService, useValue: insuranceServiceMock}
      ],
      imports: [
        TranslateModule.forRoot({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }

});
