import { TestBed } from '@angular/core/testing';

import { InsuranceService } from './insurance.service';
import { RouterService } from '../../../common/router.service';

describe('InsuranceService', () => {

  const INSURANCE = {
     userId: '1',
     date: new Date(),
     company: 'Verti',
     plate: '4848HDS',
     vehicleBrand: 'Jaguar',
     vehicleModel: 'X-Type'
  };

  let service: InsuranceService;
  let routerServiceMock: RouterService;

  beforeEach(() => tearUp());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('should define method createReport that', () => {
    beforeEach(() => service.createReport(INSURANCE));

    it('gets current user', () => expect(localStorage.getItem).toHaveBeenCalledWith('current-user-id'));

    it('sets insurance on localStorage', () => expect(localStorage.setItem).toHaveBeenCalled());

    it('goes to home page', () => expect(routerServiceMock.goToHomePage).toHaveBeenCalled());
  });

  function createMocks(): void {
    routerServiceMock = new RouterService(null);
    spyOn(routerServiceMock, 'goToHomePage').and.callFake(() => '');

    spyOn(localStorage, 'getItem').and.callFake(() => '');
    spyOn(localStorage, 'setItem').and.callFake(() => null);
  }

  function configureTestingModule(): void {
    TestBed.configureTestingModule({
      providers: [
        InsuranceService,
        {provide: RouterService, useValue: routerServiceMock}
      ]
    });
    service = TestBed.inject(InsuranceService);
  }

  function tearUp(): void {
    createMocks();
    configureTestingModule();
  }
});
