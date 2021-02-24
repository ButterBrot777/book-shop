import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {BookModel} from '../../../../models/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: BookModel[];
  @Output() removeFromCartAction = new EventEmitter();
  count = 1;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    console.log('cart, cart component, constructor: ', this.cart);
  }

  ngOnInit(): void {
  }

  removeFromCart(index: number): void {
    this.count = 1;
    this.removeFromCartAction.emit(this.cart[index].id);
    this.cart.splice(index, 1);
  }

  change(inc): number {
    return inc ? this.count++ : this.count--;
  }

}
