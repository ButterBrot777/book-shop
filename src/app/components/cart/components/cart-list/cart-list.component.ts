import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {CartBook, CartItem, CartData} from '../../models/cart-models';
import {BookModel} from '../../../book/models/book-model';
import {CartService} from '../../cart.service';
import {BookService} from '../../../book/book.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck, AfterViewInit {

  cartItems: CartItem[] = [];
  cartBooks: CartBook[] = [];
  bookStorage: BookModel[] = [];
  cartData: CartData = {
    totalQuantity: 0,
    totalCost: 0
  };

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookStorage = this.bookService.getBooks();
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
    console.log('cart list find book');
    const book = this.bookStorage.find(item => item.id === id);
    return { ...book, bookCount: 1};
  }

  checkBooksToRender(): CartBook[] {
    // console.log('check books to render');

    return this.bookStorage
      .filter(book =>
        this.cartItems.some((item) => book.id === item.id))
      .map((book) => {
      return {
        ...book,
        bookCount: this.cartItems.find((item) => item.id === book.id).count,
      };
    });
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
    // this.cartData = this.cartService.updateCartData()
  }
}
