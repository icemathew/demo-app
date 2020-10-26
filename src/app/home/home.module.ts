import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HomeComponent } from './component/home.component';
import { HomeService } from './service/home.service';
import { HomeRoutingModule } from './home-routing.module';
import { InsuranceModule } from './insurance/insurance.module';
import { ManageInsurancesModule } from './manager/manager.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserSettingsModule } from './user-settings/user-settings.module';

@NgModule({
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  imports: [
    FormsModule,
    HomeRoutingModule,
    InsuranceModule,
    ManageInsurancesModule,
    TranslateModule,
    UserSettingsModule
  ],
  providers: [ HomeService ]
})
export class HomeModule { }
