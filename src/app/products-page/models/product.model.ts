import {BookCategories} from '../../core';

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  category: BookCategories;
  isAvailable: boolean;
  updateDate: number;
}
