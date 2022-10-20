import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  boolAuth: boolean = false;

  constructor() {
    this.boolAuth = false
  }

  getAuthStatus(): boolean {
    return this.boolAuth;
  }




}
