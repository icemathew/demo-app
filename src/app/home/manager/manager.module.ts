import { AgGridModule } from 'ag-grid-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ManageInsurancesComponent } from './component/manager.component';

@NgModule({
  declarations: [ ManageInsurancesComponent ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    TranslateModule
  ]
})
export class ManageInsurancesModule { }
