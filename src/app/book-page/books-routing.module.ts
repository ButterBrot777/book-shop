import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPath} from '../shared/shared.constants';
import {BookComponent} from './book.component';
import {BookListComponent} from './components/book-list';
import {BookItemComponent} from './components/book-item';

const routes: Routes = [
  {
    path: AppPath.Empty,
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
