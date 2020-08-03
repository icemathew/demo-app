import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule as TranslateModuleProvider } from '@ngx-translate/core';

import { TranslateLoaderFactory } from './factory/translate-loader.factory';
import { TranslateConfigService } from './service/translate-config.service';

@NgModule({
  exports: [
    HttpClientModule,
    TranslateModuleProvider
  ],
  imports: [
    TranslateModuleProvider.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderFactory),
        deps: [HttpClient]
      }
    })
  ]
})
export class TranslateModule {

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: TranslateModule,
      providers: [
        TranslateConfigService
      ]
    };
  }
}
