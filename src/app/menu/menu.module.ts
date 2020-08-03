import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MenuComponent } from './component/menu.component';

@NgModule({
  declarations: [ MenuComponent ],
  exports: [ MenuComponent ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class MenuModule { }
