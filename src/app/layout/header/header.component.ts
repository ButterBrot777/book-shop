import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppPath, AuthService} from '../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  books = AppPath.Books;
  cart = AppPath.Cart;

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
