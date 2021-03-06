import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartBook, CartData} from '../../models/cart-models';
import {Book} from '../../../book-page/models/book-model';
import {CartService} from '../../services/cart.service';
import {BookService} from '../../../book-page/services/book.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  cartBooks: CartBook[] = [];
  cartData: CartData;
  cart$: Observable<CartBook[]>;
  isCartEmpty = true;

  private bookStorage$: Observable<Book[]>;
  private cartSubscription: Subscription;
  private cartDataSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.cartSubject;
    this.cartSubscription = this.cart$.subscribe((cart: CartBook[]) => {
      this.cartBooks = cart;
      if (!this.cartBooks.length) {
        this.isCartEmpty = false;
      } else {
        this.isCartEmpty = true;
      }
    });
    this.bookStorage$ = this.bookService.getBooks();
    this.cartDataSubscription = this.cartService.cartDataSubject.subscribe((data: CartData) => {
      this.cartData = data;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.cartDataSubscription.unsubscribe();
  }

  increaseCount(book: CartBook): void {
    this.cartService.increaseQuantity(book.id);
  }

  decreaseCount(book: CartBook): void {
    this.cartService.decreaseQuantity(book.id);
  }

  removeItemFromCart(book: CartBook): void {
    this.cartService.removeBook(book.id);
  }

  clearCart(): void {
    this.cartService.removeAllBooks();
  }
}
