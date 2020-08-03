import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UserSettingsComponent } from './component/user-settings.component';
import { UserSettingsService } from './service/user-settings.service';

@NgModule({
  declarations: [ UserSettingsComponent ],
  imports: [
	FormsModule,
	TranslateModule
  ],
  providers: [ UserSettingsService ]
})
export class UserSettingsModule { }
