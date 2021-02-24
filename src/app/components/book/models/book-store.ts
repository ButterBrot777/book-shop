import {BookModel} from './book-model';
import {BookCategories} from '../../../models/models';

const bookStorage: BookModel[] = [
  {
    id: 1,
    isInCart: false,
    category: BookCategories.Detective,
    createDate: 1613985163289,
    description: '«Walk into the incredible true experience of Billy Hayes, and bring all the courage you can!»',
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
    price: 100.99,
    author: 'Ronald Tolkien',
  },
  {
    id: 3,
    isInCart: false,
    category: BookCategories.Horror,
    createDate: 1613985161100,
    description: '«And will I tell you that these three lived happily ever after? I will not, for no one ever does. But there was happiness. And they did live»',
    isAvailable: true,
    name: 'The Dark Tower',
    price: 100.99,
    author: 'Stephen King',
  }
];
export default bookStorage;
