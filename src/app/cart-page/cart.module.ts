import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CartRoutingModule} from './cart-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  declarations: [
    CartRoutingModule.components,
  ],
})
export class CartModule {}
