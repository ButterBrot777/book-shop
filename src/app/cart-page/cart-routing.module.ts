import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from './cart.component';
import {CartListComponent} from './components/cart-list';
import {CartItemComponent} from './components/cart-item';
import {RouterModule, Routes} from '@angular/router';
import {AppPath} from '../shared/shared.constants';

const routes: Routes = [
  {
    path: AppPath.Empty,
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
