import { Injectable } from '@angular/core';
import bookStorage from './models/book-store';
import {BookModel} from './models/book-model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BookModel[] = bookStorage;
  private books$ = of(bookStorage);

  constructor() { }

  getBooks(): Observable<BookModel[]> {
    return this.books$;
  }
}
