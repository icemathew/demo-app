import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home.component';
import { InsuranceComponent } from './insurance/component/insurance.component';
import { ManageInsurancesComponent } from './manager/component/manager.component';
import { UserSettingsComponent } from './user-settings/component/user-settings.component';

const routes: Routes = [

 { path: 'index', component: HomeComponent },
 { path: 'insurances', component: InsuranceComponent },
 { path: 'manager', component: ManageInsurancesComponent },
 { path: 'user-settings', component: UserSettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
