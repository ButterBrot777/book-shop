import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CartListComponent} from './components/cart-list';
import {CartItemComponent} from './components/cart-item';
import { CartComponent } from './cart.component';
import {CartRoutingModule} from './cart-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  declarations: [
    CartRoutingModule.components,
    CartListComponent,
    CartItemComponent,
    CartComponent,
  ],
})
export class CartModule {}
