import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {CartBook, CartItem, CartData} from '../../models/cart-models';
import {BookModel} from '../../../book/models/book-model';
import {CartService} from '../../cart.service';
import {BookService} from '../../../book/book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck, AfterViewInit {

  cartItems: CartItem[] = [];
  cartBooks: CartBook[] = [];
  bookStorage$: Observable<BookModel[]>;
  cartData: CartData = {
    totalQuantity: 0,
    totalCost: 0
  };

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookStorage$ = this.bookService.getBooks();
    this.cartItems = this.cartService.getAllItemsInCart();
    this.cartData = this.cartService.updateCartData();
  }

  ngAfterViewInit(): void {
    this.cartService.updateCartData();
  }

  ngDoCheck(): void {
    this.refreshCart();
  }

  findBook(id: number): CartBook {
    let book: BookModel;
    this.bookStorage$.subscribe(books => {
      book = books.find(item => item.id === id);
    }).unsubscribe();
    return { ...book, bookCount: 1};
  }

  checkBooksToRender(): CartBook[] {
    // console.log('check books to render');
    let storage: CartBook[];

    this.bookStorage$.subscribe(books => {
      storage = books.filter(book =>
        this.cartItems.some((item) => book.id === item.id))
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
  }
  decreaseCount(book: CartBook): void {
    this.cartService.decreaseQuantity(book.id);
    this.cartData = this.cartService.updateCartData();
  }
  removeItemFromCart(book: CartBook): void {
    this.cartService.removeBook(book.id);
    this.cartData = this.cartService.updateCartData();
  }
  clearCart(): void {
    this.cartService.removeAllBooks();
    this.refreshCart();
  }

  refreshCart(): void {
    this.cartItems = this.cartService.getAllItemsInCart();
    this.cartBooks = this.checkBooksToRender();
  }
}
