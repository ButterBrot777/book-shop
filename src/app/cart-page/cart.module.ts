import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { CartItemComponent, CartListComponent } from './components';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [SharedModule, CartRoutingModule],
  declarations: [CartComponent, CartListComponent, CartItemComponent],
})
export class CartModule {}
