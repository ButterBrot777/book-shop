import { Injectable } from '@angular/core';
import bookStorage from './models/book-store';
import {BookModel} from './models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BookModel[] = bookStorage;

  constructor() { }

  getBooks(): BookModel[] {
    return this.books;
  }
}
