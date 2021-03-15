import { Injectable } from '@angular/core';
import {Book, bookStorage} from '../models';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books$ = of(bookStorage);

  constructor() { }

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  getBookById(id: number): Book {
    return bookStorage.find(book => book.id === id);
  }
}
