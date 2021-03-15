import { Book } from '../../core';

export interface CartBook extends Book {
  bookCount: number;
}

export interface CartData {
  totalQuantity: number;
  totalCost: number;
}
