import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import { AppPath, AuthService } from '../../core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  books = AppPath.Books;
  cart = AppPath.Cart;
  isAdmin: boolean;
  isAuthenticated: boolean;

  private isAuthenticatedSubscription: Subscription;
  private isAdminSubscription: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkIsAuthenticated();
    this.authService.checkIsAdmin();
    this.isAdminSubscription = this.authService.isAdminSubject.subscribe(status => this.isAdmin = status);
    this.isAuthenticatedSubscription = this.authService.isAuthenticatedSubject.subscribe(status => this.isAuthenticated = status);
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSubscription.unsubscribe();
    this.isAdminSubscription.unsubscribe();
  }
}
