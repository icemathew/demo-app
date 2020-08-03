import { Injectable } from '@angular/core';

import { RouterService } from '../../../common/router.service';
import { Insurance } from '../../../model/insurance.model';

@Injectable()
export class InsuranceService {

  constructor(private routerService: RouterService) { }

  createReport(report: Insurance): void {
	this.saveReportLocalStorage(report);
   }

   private saveReportLocalStorage(report: Insurance): void {
	const currentUserId = localStorage.getItem('current-user-id');
	report.userId = currentUserId;
	const keyId = 'insurances-' + currentUserId + '-' + new Date().getTime();
	localStorage.setItem(keyId, JSON.stringify(report));
	this.routerService.goToHomePage();
   }
}
