import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPath} from '../core';
import {AdminLayoutComponent} from './components/admin-layout';

const routes: Routes = [
  {
    path: AppPath.Admin,
    component: AdminLayoutComponent,
    pathMatch: 'full'
      // todo: create products-list component
      // {
      //   path: AppPath.ProductsList,
      //   component: ProductsListComponent
      // }
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
