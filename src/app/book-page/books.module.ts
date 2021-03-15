import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { BooksRoutingModule } from './books-routing.module';
import { BookItemComponent, BookListComponent } from './components';
import { BookComponent } from './book.component';

@NgModule({
  imports: [SharedModule, BooksRoutingModule],
  declarations: [BookItemComponent, BookListComponent, BookComponent],
})
export class BooksModule {}
