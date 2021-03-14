import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BookListComponent, BookItemComponent} from '../book-page';
import {BookComponent} from './book.component';
import {AppPath} from '../core';

const routes: Routes = [
  {
    path: AppPath.Books,
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
