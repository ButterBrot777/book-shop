import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CartComponent} from './cart.component';
import {CartListComponent} from './components/cart-list';
import {CartItemComponent} from './components/cart-item';
import {AppPath} from '../core';

const routes: Routes = [
  {
    path: AppPath.Cart,
    component: CartComponent,
    children: [
      {
        path: AppPath.Empty,
        component: CartListComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class CartRoutingModule {
  static components = [
    CartComponent,
    CartListComponent,
    CartItemComponent,
  ];
}
