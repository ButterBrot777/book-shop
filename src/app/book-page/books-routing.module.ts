import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BookComponent, BookListComponent, BookItemComponent} from '../book-page';
import {AppPath} from '../core';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: AppPath.Empty,
        component: BookListComponent,
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
    RouterModule
  ],
  providers: []
})
export class BooksRoutingModule {
  static components = [
    BookComponent,
    BookListComponent,
    BookItemComponent
  ];
}
