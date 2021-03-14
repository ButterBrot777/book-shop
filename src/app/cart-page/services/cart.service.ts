import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';

import {CartBook, CartData} from '../models';
import {Book, bookStorage} from '../../book-page';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnDestroy {
  private cart: CartBook[] = [];

  // book-page storage
  private bookStorage: Book[];
  private books$ = of(bookStorage);

  private cartData: CartData = {
    totalQuantity: 0,
    totalCost: 0,
  };

  // Observable of cart
  public cartSubject: BehaviorSubject<Array<CartBook>> = new BehaviorSubject(this.cart);
  public cartDataSubject: BehaviorSubject<CartData> = new BehaviorSubject(this.cartData);

  private cartSubscription: Subscription;
  private cartBookSubscription: Subscription;

  constructor() {
    this.cartSubscription = this
      .getBooks()
      .subscribe((books: Book[]) => (this.bookStorage = books));
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.cartBookSubscription.unsubscribe();
  }

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  addBook(id: number): void {
    const item: CartBook = this.findBookInCart(id);

    const shouldUpdateCart: boolean = !item;

    if (shouldUpdateCart) {
      const book = this.findBookInStorage(id);
      const newCartBook = {
        ...book,
        bookCount: 1,
      };
      this.cart = this.cart ? [...this.cart, newCartBook] : [newCartBook];
      this.cartSubject.next(this.cart);
      this.updateCartData();
    }
  }

  increaseQuantity(bookId: number): void {
    this.findBookInCart(bookId).bookCount += 1;
    this.updateCartData();
  }

  decreaseQuantity(bookId: number): void {
    const cartBook = this.findBookInCart(bookId);
    if (cartBook.bookCount > 0) {
      cartBook.bookCount -= 1;
      this.updateCartData();
    }
  }

  removeBook(id: number): void {
    const indexOfBook = this.cart.findIndex(book => book.id === id);
    this.cart.splice(indexOfBook, 1);
    this.updateCartData();
  }

  removeAllBooks(): void {
    this.cart = [];
    this.updateCartData();
  }

  // recalculate total quantity and cart-page cost after each action
  updateCartData(): void {
    this.updateCart();
    this.calculateItemsCost();
    this.calculateItemsQuantity();
    this.cartDataSubject.next(this.cartData);
  }

  updateCart(): void {
    const newCart = [...this.cart];
    this.cartSubject.next(newCart);
  }
  calculateItemsQuantity(): void {
    const totalCount = this.cart?.reduce((acc: number, curr): number => {
      return acc + curr.bookCount;
    }, 0);
    this.cartData.totalQuantity = totalCount;
  }

  calculateItemsCost(): void {
    const totalCost = this.cart?.reduce((acc: number, curr): number => {
      return acc + curr.bookCount * curr.price;
    }, 0);

    this.cartData.totalCost = totalCost;
  }

  // check if book-page is already in the cart-page
  findBookInCart(id: number): CartBook {
    return this.cart.find(item => item.id === id);
  }

  findBookInStorage(id: number): Book {
    return this.bookStorage?.find((book: Book) => book.id === id);
  }
}
