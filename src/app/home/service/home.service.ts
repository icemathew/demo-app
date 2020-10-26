import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }

  getUserName(): string {
    const userId = localStorage.getItem('current-user-id');
    return localStorage.getItem('user-name' + userId);
  }
}
