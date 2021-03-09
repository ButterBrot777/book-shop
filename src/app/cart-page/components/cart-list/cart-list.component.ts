import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { CartBook, CartItem, CartData } from '../../models/cart-models';
import { Book } from '../../../book-page/models/book-model';
import { CartService } from '../../services/cart.service';
import { BookService } from '../../../book-page/services/book.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit, AfterViewInit {
  cartItems: CartItem[] = [];
  cartBooks: CartBook[] = [];
  bookStorage$: Observable<Book[]>;
  cartData: CartData = {
    totalQuantity: 0,
    totalCost: 0,
  };

  public cart$: Observable<Array<CartItem>>;

  constructor(
    private cartService: CartService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.cartSubject.pipe(
      tap((cart) => console.log('CART from service: ', cart))
    );
    console.log('Init CartListComponent');
    // this.refreshCart();
    // this.bookStorage$ = this.bookService.getBooks();
    // this.cartItems = this.cartService.getAllItemsInCart();
    // this.cartData = this.cartService.updateCartData();
    // this.cartBooks = this.checkBooksToRender();
    // console.log('init cart => books: ', this.bookStorage$);
    // console.log('cart items: ', this.cartItems);
    // console.log('cart books: ', this.cartBooks);
  }

  ngAfterViewInit(): void {
    this.cartService.updateCartData();
  }

  // ngDoCheck(): void {
  //   this.refreshCart();
  // }

  findBook(id: number): CartBook {
    let book: Book;
    this.bookStorage$
      .subscribe((books) => {
        book = books.find((item) => item.id === id);
      })
      .unsubscribe();
    return { ...book, bookCount: 1 };
  }

  checkBooksToRender(): CartBook[] {
    // console.log('check books to render');
    let storage: CartBook[];

    this.bookStorage$.subscribe((books) => {
      console.log('in subscrible: books: ', books);
      console.log('in subscrible, cart items: ', this.cartItems);
      storage = books
        .filter((book) => this.cartItems.some((item) => book.id === item.id))
        .map((book) => {
          return {
            ...book,
            bookCount: this.cartItems.find((item) => item.id === book.id).count,
          };
        });
    });
    return storage;
  }

  increaseCount(book: CartBook): void {
    this.cartService.increaseQuantity(book.id);
    this.cartData = this.cartService.updateCartData();
    this.refreshCart();
  }
  decreaseCount(book: CartBook): void {
    this.cartService.decreaseQuantity(book.id);
    this.cartData = this.cartService.updateCartData();
    this.refreshCart();
  }
  removeItemFromCart(book: CartBook): void {
    this.cartService.removeBook(book.id);
    this.cartData = this.cartService.updateCartData();
    this.refreshCart();
  }
  clearCart(): void {
    this.cartService.removeAllBooks();
    this.refreshCart();
  }

  refreshCart(): void {
    // this.cartItems = this.cartService.getAllItemsInCart();
    this.cartBooks = this.checkBooksToRender();
  }
}
