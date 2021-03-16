import {BookCategories} from '../../core';

export interface Book {
  id?: number;
  isInCart?: boolean;
  name: string;
  description: string;
  price: number;
  category: BookCategories;
  createDate: number;
  isAvailable: boolean;
  author: string;
}
