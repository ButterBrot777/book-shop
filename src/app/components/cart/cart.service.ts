import { Injectable } from '@angular/core';
import {CartItem} from './models/cart-models';
import {BookModel} from '../book/models/book-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart storage
  cartProducts: CartItem[] = [];

  // cart items quantity
  totalQuantity: number;

  // total cart cost
  totalSum: number;

  constructor() { }

  getAllItemsInCart(): CartItem[] {
    console.log('get all items in cart: ', this.cartProducts)
    return this.cartProducts;
  }

  addBook(id: number): void {
    const isInCart = this.findBookInCart(id);

    if (isInCart) {
      console.log('abort');
      return;
    } else {
      this.cartProducts.push({id, count: 1});
      console.log('add book: ', this.cartProducts);
    }
  }
  removeBook(): void {}
  increaseQuantity(): void {}
  decreaseQuantity(): void {}
  removeAllBooks(): void {}

  // recalculate total quantity and cart cost after each action
  updateCartData(): void {}

  // check if book is already in the cart
  findBookInCart(id: number): CartItem {
    console.log('service check if in cart');
    return this.cartProducts.find(item => item.id === id);
  }
}
