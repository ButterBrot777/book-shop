import { Component, OnInit } from '@angular/core';
import {CartBook, CartItem} from '../../models/cart-models';
import {BookModel} from '../../../book/models/book-model';
import {CartService} from '../../cart.service';
import {BookService} from '../../../book/book.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartBooks: CartBook[] = [];
  bookStorage: BookModel[] = [];

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookStorage = this.bookService.getBooks();
  }

}
