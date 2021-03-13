import { Injectable } from '@angular/core';
import {Book} from '../models/book-model';
import {Observable, of} from 'rxjs';

import bookStorage from '../models/book-store';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books$ = of(bookStorage);

  constructor() { }

  getBooks(): Observable<Book[]> {
    return this.books$;
  }
}
