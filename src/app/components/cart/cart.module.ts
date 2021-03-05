import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartComponent,
  ],
})
export class CartModule {}
