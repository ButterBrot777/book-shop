import { Component, OnInit } from '@angular/core';

import { AppPath, AuthService } from '../../core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  userBooksPath = AppPath.Books;
  adminPath = AppPath.Admin;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(status: string): void {
    this.authService.login(status);
  }
}
