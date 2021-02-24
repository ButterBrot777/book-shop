import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BookModel} from '../../../../models/models';
import {CartBook} from '../../models/cart-models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
  // todo: change to onPush strategy
})
export class CartItemComponent {
  @Input() book: CartBook;
  @Output() removeBookFromCart = new EventEmitter();
  @Output() changed = new EventEmitter<boolean>();
  count = 1;

  constructor() { }


}
