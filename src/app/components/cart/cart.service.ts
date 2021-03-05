import {Injectable, Output, EventEmitter} from '@angular/core';
import {CartItem, CartData} from './models/cart-models';
import {BookModel} from '../book/models/book-model';
import {BookService} from '../book/book.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart storage
  cartProducts: CartItem[] = [];

  // book storage
  bookStorage: BookModel[] = [];

  // cart items quantity
  totalQuantity: number;

  // total cart cost
  totalSum: number;

  constructor(
    private bookService: BookService
  ) {
    this.bookStorage = this.getAllBooks();
  }

  getAllItemsInCart(): CartItem[] {
    // console.log('get all items in cart: ', this.cartProducts);
    return this.cartProducts;
  }

  getAllBooks(): BookModel[] {
    return this.bookService.getBooks();
  }

  addBook(id: number): void {
    const isInCart = this.findBookInCart(id);

    if (isInCart) {
      console.log('abort');
      return;
    } else {
      this.cartProducts.push({id, count: 1, price: this.findBookPriceById(id)});
      this.updateCartData();
      console.log('add book: ', this.cartProducts);
      console.log('totalSum: ', this.totalSum);
      console.log('totalCost: ', this.totalQuantity);
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
    const indexOfBook = this.cartProducts.findIndex(book => book.id === id);
    this.cartProducts.splice(indexOfBook, 1);
    this.updateCartData();
  }

  removeAllBooks(): void {
    this.cartProducts = [];
  }

  // recalculate total quantity and cart cost after each action
  updateCartData(): CartData {
    this.calculateItemsCost();
    this.calculateItemsQuantity();
    return {
      totalCost: this.totalSum,
      totalQuantity: this.totalQuantity
    };
  }

  calculateItemsQuantity(): void {
    const totalCount = this.cartProducts.reduce((acc: number, curr): number => {
      return acc + curr.count;
    }, 0);
    this.totalQuantity = totalCount;
  }
  calculateItemsCost(): void {
    const totalCost = this.cartProducts.reduce((acc: number, curr): number => {
      return acc +  curr.count * curr.price;
    },  0);

    this.totalSum = totalCost;
  }

  // check if book is already in the cart
  findBookInCart(id: number): CartItem {
    console.log('service check if in cart');
    return this.cartProducts.find(item => item.id === id);
  }

  findBookPriceById(id: number): number {
    return this.bookStorage.find(book => book.id === id).price;
  }
}
