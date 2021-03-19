import { AppConstVersion, Book } from './models';

export enum BookCategories {
  Action = 'Action',
  Detective = 'Detective',
  Fantasy = 'Fantasy',
  Horror = 'Horror',
}

export const ConstantsService: AppConstVersion = {
  App: 'TaskManager',
  Ver: '1.0',
};

export enum AppPath {
  Empty = '',
  Books = 'books',
  ProductsList = 'products-list',
  Product = 'product',
  Cart = 'cart',
  Orders = 'orders',
  Edit = 'edit',
  Admin = 'admin',
}

export const BOOK_STORAGE: Book[] = [
  {
    id: 1,
    isInCart: false,
    category: BookCategories.Detective,
    createDate: 1613985163289,
    description:
      '«Walk into the incredible true experience of Billy Hayes, and bring all the courage you can!»',
    isAvailable: true,
    name: 'The Midnight Express',
    price: 100.99,
    author: 'Agatha Christie',
  },
  {
    id: 2,
    isInCart: false,
    category: BookCategories.Fantasy,
    createDate: 1613985163100,
    description: '«From the smallest beginnings come the greatest legends»',
    isAvailable: false,
    name: 'The Hobbit',
    price: 50.99,
    author: 'Ronald Tolkien',
  },
  {
    id: 3,
    isInCart: false,
    category: BookCategories.Horror,
    createDate: 1613985161100,
    description:
      '«And will I tell you that these three lived happily ever after? I will not, for no one ever does. But there was happiness. And they did live»',
    isAvailable: true,
    name: 'The Dark Tower',
    price: 70.99,
    author: 'Stephen King',
  },
  {
    id: 4,
    isInCart: false,
    category: BookCategories.Action,
    createDate: 1613985160100,
    description: `«Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?»`,
    isAvailable: true,
    name: 'The Hunger Games',
    price: 75.99,
    author: 'Suzanne Collins',
  },
  {
    id: 5,
    isInCart: false,
    category: BookCategories.Action,
    createDate: 1613985160100,
    description:
      '«Ex-military policeman Jack Reacher is a drifter. Find all villains. Not a chance in hell»',
    isAvailable: true,
    name: 'Killing Floor',
    price: 79.99,
    author: 'Lee Child',
  },
  {
    id: 6,
    isInCart: false,
    category: BookCategories.Action,
    createDate: 1613985160100,
    description:
      '«For anyone who wants more brain-food than thrillers normally provide»',
    isAvailable: true,
    name: 'Origin',
    price: 85.39,
    author: 'Dan Brown',
  },
  {
    id: 7,
    isInCart: false,
    category: BookCategories.Horror,
    createDate: 1613985165100,
    description:
      '«This is a story about what might happen when a woman takes charge... A glorious visceral mystery»',
    isAvailable: true,
    name: 'Death in Her Hands',
    price: 85.39,
    author: 'Ottessa Moshfegh',
  },
  {
    id: 8,
    isInCart: false,
    category: BookCategories.Action,
    createDate: 1613985169100,
    description:
      '«There have been many good books on human rationality and irrationality, but only one masterpiece.»',
    isAvailable: true,
    name: 'Thinking, Fast and Slow',
    price: 85.39,
    author: 'Daniel Kahneman',
  },
];
