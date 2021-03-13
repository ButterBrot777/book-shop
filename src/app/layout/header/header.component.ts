import { Component, OnInit } from '@angular/core';
import {AppPath} from '../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  books = AppPath.Books;
  cart = AppPath.Cart;
  constructor() { console.log('books, cart: ', this.books, this.cart) }

  ngOnInit(): void {
  }

}
