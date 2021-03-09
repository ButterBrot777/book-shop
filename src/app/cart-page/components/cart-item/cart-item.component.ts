import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {CartBook} from '../../models/cart-models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
  // todo: change to onPush strategy
})
export class CartItemComponent implements OnDestroy {
  @Input() book: CartBook;

  @Output() remove = new EventEmitter<CartBook>();
  @Output() increase = new EventEmitter<CartBook>();
  @Output() decrease = new EventEmitter<CartBook>();

  constructor() { }

  ngOnDestroy(): void {
    console.log('Cart was destroyed');
  }

  onIncrease(): void {
    console.log('cart-page item change count');
    this.increase.emit(this.book);
  }

  onDecrease(): void {
    console.log('cart-page item change count');
    this.decrease.emit(this.book);
  }

  onRemove(): void {
    this.remove.emit(this.book);
  }

}
