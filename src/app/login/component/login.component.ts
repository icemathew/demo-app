import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { User, UserInitialState } from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormControl;
  pass: FormControl;
  user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
	this.user = Object.assign({}, UserInitialState);
	this.login = new FormControl(this.user.login, Validators.required);
	this.pass = new FormControl(this.user.pass, Validators.required);
  }

  checkCredentials(): void {
   if (this.user.login && this.user.pass) {
    this.loginService.loginValidation(this.user);
   }
  }

}
