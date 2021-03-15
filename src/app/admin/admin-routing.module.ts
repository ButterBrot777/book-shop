import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPath} from '../core';
import {AdminLayoutComponent} from './components/admin-layout';
import {BookListComponent} from '../book-page/components/book-list';

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
