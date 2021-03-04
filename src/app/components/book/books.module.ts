import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookItemComponent} from './components/book-item/book-item.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
})
export class BooksModule {}
