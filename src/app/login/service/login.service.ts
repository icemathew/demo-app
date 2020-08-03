import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../common/auth.service';
import { DataBase } from '../../model/database.model';
import { RouterService } from '../../common/router.service';
import { User } from '../../model/user.model';
import { UserInfo } from '../../model/user-info.model';

@Injectable()
export class LoginService {

  constructor(private authService: AuthService,
        private http: HttpClient,
        private routerService: RouterService,
		private toast: ToastrService,
		private translate: TranslateService) { }

  loginValidation(user: User): void {
   this.http.get<DataBase>('assets/db/db.json')
    .pipe(map((response) => response.users))
    .subscribe((usersInfo: Array<UserInfo>) => {
      const userFound = usersInfo.filter((userInfo => userInfo.login === user.login && userInfo.pass === user.pass ));
      if (userFound.length) {
        this.fillUserInfo(userFound[0]);
        this.authService.setTokenLocalStorage();
        this.routerService.goToHomePage();
      } else {
		this.toast.error(this.translate.instant('login.error'));
      }
    });
  }

   private fillUserInfo(userInfo: UserInfo): void {
     const userId = userInfo.id.toString();
     localStorage.setItem('current-user-id', userId);
     if (localStorage.getItem('user-name' + userId) === null) {
       localStorage.setItem('user-name' + userId, userInfo.name);
       localStorage.setItem('user-last-name' + userId, userInfo.lastName);
       localStorage.setItem('user-role' + userId, userInfo.role);
     }
   }
}
