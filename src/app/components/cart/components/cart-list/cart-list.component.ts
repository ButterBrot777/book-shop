import {Component, DoCheck, OnInit} from '@angular/core';
import {CartBook, CartItem} from '../../models/cart-models';
import {BookModel} from '../../../book/models/book-model';
import {CartService} from '../../cart.service';
import {BookService} from '../../../book/book.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck {

  cartItems: CartItem[] = [];
  cartBooks: CartBook[] = [];
  bookStorage: BookModel[] = [];

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookStorage = this.bookService.getBooks();
    this.cartItems = this.cartService.getAllItemsInCart();
    console.log('cart list on init book storage: ', this.bookStorage);
    console.log('cart list on init cart items: ', this.cartItems);
  }

  ngDoCheck(): void {
    this.cartItems = this.cartService.getAllItemsInCart();
    // this.cartBooks = this.findBook();
    console.log('cart list ngDoCheck cartItems: ', this.cartItems);
    console.log('cart list ngDoCheck cartBooks: ', this.cartBooks);
    this.cartBooks = this.checkBooksToRender();
  }

  findBook(id: number): CartBook {
    console.log('cart list find book');
    const book = this.bookStorage.find(item => item.id === id);
    return { ...book, bookCount: 1};
  }

  checkBooksToRender(): CartBook[] {
    console.log('check books to render');
    const ids = this.cartItems.map(elem => elem.id);
    console.log('ids: ', ids);

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
}
