import {Component, OnInit} from '@angular/core';
import {CartBook, CartData} from '../../models/cart-models';
import {Book} from '../../../book-page/models/book-model';
import {CartService} from '../../services/cart.service';
import {BookService} from '../../../book-page/services/book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartBooks: CartBook[] = [];
  cartData: CartData;
  cart$: Observable<CartBook[]>;
  isCartEmpty = true;

  private bookStorage$: Observable<Book[]>;

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.cartSubject;
    this.cart$.subscribe((cart: CartBook[]) => {
      this.cartBooks = cart;
      if (!this.cartBooks.length) {
        this.isCartEmpty = false;
      } else {
        this.isCartEmpty = true;
      }
    });
    this.bookStorage$ = this.bookService.getBooks();
    this.cartService.cartDataSubject.subscribe((data: CartData) => {
      this.cartData = data;
    });
  }

  increaseCount(book: CartBook): void {
    this.cartService.increaseQuantity(book.id);
    // this.cartData = this.cartService.updateCartData();
    // this.refreshCart();
  }

  decreaseCount(book: CartBook): void {
    this.cartService.decreaseQuantity(book.id);
    // this.cartData = this.cartService.updateCartData();
    // this.refreshCart();
  }

  removeItemFromCart(book: CartBook): void {
    this.cartService.removeBook(book.id);
    // this.cartData = this.cartService.updateCartData();
    // this.refreshCart();
  }

  clearCart(): void {
    this.cartService.removeAllBooks();
    // this.refreshCart();
  }

  // refreshCart(): void {
  //   this.cartBooks = this.checkBooksToRender();
  // }
}
