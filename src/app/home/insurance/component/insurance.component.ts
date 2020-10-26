import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../service/insurance.service';
import { Insurance, InsuranceInitialState } from '../../../model/insurance.model';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html'
})
export class InsuranceComponent implements OnInit {

  insurance: Insurance;

  constructor(private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.insurance = Object.assign({}, InsuranceInitialState);
  }

  createReport(): void {
    this.insuranceService.createReport(this.insurance);
  }
}
