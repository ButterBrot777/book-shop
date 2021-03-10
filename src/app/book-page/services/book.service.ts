import { Injectable } from '@angular/core';
import bookStorage from '../models/book-store';
import {Book} from '../models/book-model';
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
}
