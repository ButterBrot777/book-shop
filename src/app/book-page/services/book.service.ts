import { Injectable } from '@angular/core';

import { Book, BOOK_STORAGE } from '../../core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books$ = of(BOOK_STORAGE);

  constructor() {}

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  getBookById(id: number): Book {
    return BOOK_STORAGE.find((book) => book.id === id);
  }
}
