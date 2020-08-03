import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { InsuranceComponent } from './component/insurance.component';
import { InsuranceService } from './service/insurance.service';

@NgModule({
  declarations: [ InsuranceComponent ],
  imports: [
		FormsModule,
		TranslateModule
	],
  providers: [ InsuranceService ]
})
export class InsuranceModule { }
