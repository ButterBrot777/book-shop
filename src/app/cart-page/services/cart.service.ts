import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { CartItem, CartData } from '../models/cart-models';
import { Book } from '../../book-page/models/book-model';
import { BookService } from '../../book-page/services/book.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnDestroy {
  private bookStorage: Array<Book>;
  private totalQuantity: number;
  private totalSum: number;
  private subscription: Subscription;
  private cart: Array<CartItem> = undefined;

  /**
   * Observable of cart
   */
  public cartSubject: BehaviorSubject<Array<CartItem>> = new BehaviorSubject(
    this.cart
  );

  constructor(private bookService: BookService) {
    this.subscription = this.bookService
      .getBooks()
      .subscribe((books) => (this.bookStorage = books));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addBook(id: number): void {
    const book: CartItem = this.findBookInCart(id);
    const shouldUpdateCart: boolean = !book;

    if (shouldUpdateCart) {
      const newBook: CartItem = {
        id,
        count: 1,
        price: this.findBookPriceById(id),
      };
      this.cart = this.cart ? [...this.cart, newBook] : [newBook];
      this.cartSubject.next(this.cart);
    }
  }

  increaseQuantity(bookId: number): void {
    this.findBookInCart(bookId).count += 1;
    this.updateCartData();
  }

  decreaseQuantity(bookId: number): void {
    const cartItem = this.findBookInCart(bookId);
    if (cartItem.count > 0) {
      cartItem.count -= 1;
      this.updateCartData();
    }
  }

  removeBook(id: number): void {
    const indexOfBook = this.cart.findIndex((book) => book.id === id);
    this.cart.splice(indexOfBook, 1);
    this.updateCartData();
  }

  removeAllBooks(): void {
    this.cart = [];
  }

  // recalculate total quantity and cart-page cost after each action
  updateCartData(): CartData {
    this.calculateItemsCost();
    this.calculateItemsQuantity();
    return {
      totalCost: this.totalSum,
      totalQuantity: this.totalQuantity,
    };
  }

  calculateItemsQuantity(): void {
    const totalCount = this.cart?.reduce((acc: number, curr): number => {
      return acc + curr.count;
    }, 0);
    this.totalQuantity = totalCount;
  }
  calculateItemsCost(): void {
    const totalCost = this.cart?.reduce((acc: number, curr): number => {
      return acc + curr.count * curr.price;
    }, 0);

    this.totalSum = totalCost;
  }

  // check if book-page is already in the cart-page
  findBookInCart(id: number): CartItem {
    console.log('service check if in cart-page');
    return this.cart?.find((item) => item.id === id);
  }

  findBookPriceById(id: number): number {
    const bookPrice = this.bookStorage?.find((book) => book.id === id)?.price;
    return bookPrice;
  }
}
