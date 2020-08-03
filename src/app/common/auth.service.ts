import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DataBase } from '../model/database.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient) {}
  
  getToken(): Observable<string> {
    this.createFakeToken();
    return this.http.get<DataBase>('assets/db/db.json')
      .pipe(map((response) => response.token));
  }
  
  setToken(token: string): void {
	this.token = token;
  }
  
  setTokenLocalStorage(): void {
	localStorage.setItem('demo-token', this.token);
  }
  
  checkToken(): boolean {
    return localStorage.getItem('demo-token') != null && localStorage.getItem('demo-token') === this.token;
  }
  
  private createFakeToken(): void {
    localStorage.setItem('token', '43232k2l2.as');
  }
  

}
