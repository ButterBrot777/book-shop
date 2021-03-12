import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {BookListComponent} from './components/book-list';
import {BookItemComponent} from './components/book-item';
import { BookComponent } from './book.component';
import {BooksRoutingModule} from './books-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksRoutingModule.components,
    BookListComponent,
    BookItemComponent,
    BookComponent
  ],
  exports: [
    BookListComponent
  ]
})
export class BooksModule {}
