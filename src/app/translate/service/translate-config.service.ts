import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateConfigService {

  private static DEFAULT_LANG = 'es';

  constructor(private translateSrv: TranslateService) {
    this.setDefaultLanguage();
  }

  setDefaultLanguage(): void {
    this.translateSrv.setDefaultLang(TranslateConfigService.DEFAULT_LANG);
  }
}
