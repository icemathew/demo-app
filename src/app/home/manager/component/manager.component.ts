import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-manage-insurances',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManageInsurancesComponent implements OnInit {

    columnDefs = [{headerName: this.translate.instant('insurance.company'), field: 'company' },
        {headerName: this.translate.instant('insurance.plate'), field: 'plate' },
        {headerName: this.translate.instant('insurance.brand'), field: 'vehicleBrand'},
        {headerName: this.translate.instant('insurance.model'), field: 'vehicleModel'}];
    rowData = [];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    const userKeys = Object.keys(localStorage).filter((key) => key.indexOf('insurances-') !== -1);
    userKeys.forEach(key => {
        this.rowData.push(JSON.parse(localStorage.getItem(key)));
    });
  }

}
