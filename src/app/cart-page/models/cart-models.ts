import {Book} from '../../book-page/models/book-model';

export interface CartBook extends Book {
  bookCount: number;
}

export interface CartData {
  totalQuantity: number;
  totalCost: number;
}
