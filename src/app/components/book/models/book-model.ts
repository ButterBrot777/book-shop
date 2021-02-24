export interface BookModel {
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

export enum BookCategories {
  Action = 'Action',
  Detective = 'Detective',
  Fantasy = 'Fantasy',
  Horror = 'Horror',
}
