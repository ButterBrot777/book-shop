import {CartBook} from '../../cart-page/models';

export interface Order {
  id: string;
  userId: string;
  date: number;
  quantity: number;
  cost: number;
  products: CartBook[];
  isSelected?: boolean;
}
