import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private isAuthenticated: boolean;

  constructor() {
  }

  login(status: string): void {
    this.setToken(status);
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.checkIsAuthenticated();
    this.checkIsAdmin();
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  logout(): void {
    this.setToken(null);
    this.isAuthenticatedSubject.next(false);
    this.isAdminSubject.next(true);
  }

  checkIsAuthenticated(): void {
    if (this.token === 'admin' || this.token === 'user') {
      this.isAuthenticatedSubject.next(true);
      this.isAuthenticated = true;
    } else {
      this.isAuthenticatedSubject.next(false);
      this.isAuthenticated = false;
    }
  }

  checkIsAdmin(): void {
    if (this.isAuthenticated && this.token === 'admin') {
      this.isAdminSubject.next(true);
    } else {
      this.isAdminSubject.next(false);
    }
  }
}
