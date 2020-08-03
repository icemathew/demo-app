import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/component/login.component';
import { HomeModule } from './home/home.module';
import { InsuranceComponent } from './home/insurance/component/insurance.component';
import { ManageInsurancesComponent } from './home/manager/component/manager.component';
import { UserSettingsComponent } from './home/user-settings/component/user-settings.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent },
 {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
 },
 { path: '', redirectTo: 'login', pathMatch: 'full'},
 { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
