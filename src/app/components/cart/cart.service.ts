import { Injectable } from '@angular/core';
import {CartItem} from './models/cart-models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart storage
  cartProduct: CartItem[] = [];

  // cart items quantity
  totalQuantity: number;

  // total cart cost
  totalSum: number;

  constructor() { }

  getAllItemsInCart(): CartItem[] {
    return this.cartProduct;
  }

  addBook(id): void {}
  removeBook(): void {}
  increaseQuantity(): void {}
  decreaseQuantity(): void {}
  removeAllBooks(): void {}

  // recalculate total quantity and cart cost after each action
  updateCartData(): void {}
}
