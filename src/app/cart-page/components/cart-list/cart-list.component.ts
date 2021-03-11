import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartBook, CartData} from '../../models/cart-models';
import {CartService} from '../../services/cart.service';
import {BookService} from '../../../book-page/services/book.service';
import {Observable, Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventTargetLike} from 'rxjs/internal-compatibility';
import {FromEventTarget} from 'rxjs/internal/observable/fromEvent';

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
  orderOptions = [
    {id: 1, option: 'name', name: 'name'},
    {id: 2, option: 'price', name: 'price'},
    {id: 3, option: 'bookCount', name: 'count'},
  ];
  orderDirection = [
    {id: 1, name: 'descending'},
    {id: 2, name: 'ascending'},
  ];
  opt = 'name';
  dir = false;

  form = new FormGroup({
    sortParams: new FormControl('name', Validators.required),
    sortDirection: new FormControl('', Validators.required)
  });

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
      this.isCartEmpty = !!this.cartBooks.length;
    });
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

  changeOrderOption(e: Event): void {
    this.opt = ((e.target) as HTMLInputElement).value;
  }

  changeOrderDirection(): void {
    this.dir = !this.dir;
  }
}
