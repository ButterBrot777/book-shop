import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(status: string): void {
    this.setToken(status);
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  logout(): void {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    if (this.token === 'admin' || this.token === 'user') {
      console.log('authenticated: true');
      return true;
    }
    console.log('authenticated: false');

    return false;
  }

  isAdmin(): boolean {
    if (this.isAuthenticated() && this.token === 'admin') {
      console.log('is admin');
      return true;
    }
    console.log('not admin');
    return false;
  }
}
