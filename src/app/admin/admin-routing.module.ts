import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPath} from '../core';
import {AdminLayoutComponent} from './components/admin-layout';
import {BookListComponent} from '../book-page/components/book-list';
import {BookItemComponent} from '../book-page/components/book-item';
import {ProductCardComponent} from '../products-page/components/product-card/product-card.component';

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
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: []
})
export class AdminRoutingModule {
  static components = [
    AdminLayoutComponent
  ];
}
