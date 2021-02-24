import {BookModel} from '../../book/models/book-model';

export interface CartItem {
  id: number;
  count: number;
}

export interface CartBook extends BookModel {
  bookCount: number;
}
