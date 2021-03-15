import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppPath } from '../core';
import { AdminLayoutComponent } from './components';
import { BookListComponent } from '../book-page';
import { ProductCardComponent } from '../products-page';

const routes: Routes = [
  {
    path: AppPath.Admin,
    children: [
      {
        path: AppPath.Empty,
        component: AdminLayoutComponent,
      },
      {
        path: AppPath.ProductsList,
        component: BookListComponent,
      },
      {
        path: AppPath.Product,
        children: [
          {
            path: ':id',
            component: ProductCardComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
