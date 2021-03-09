import {BookModel} from '../../book-page/models/book-model';

export interface CartItem {
  id: number;
  count: number;
  price: number;
}

export interface CartBook extends BookModel {
  bookCount: number;
}

export interface CartData {
  totalQuantity: number;
  totalCost: number;
}
