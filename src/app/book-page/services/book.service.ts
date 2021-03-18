import {Injectable, OnDestroy} from '@angular/core';

import { Book, BOOK_STORAGE } from '../../core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService implements OnDestroy {
  private books: Book[] = [];
  private books$ = new BehaviorSubject(BOOK_STORAGE);
  private booksSub: Subscription;

  constructor() {
    this.booksSub = this.books$.subscribe(books => this.books = books);
  }

  ngOnDestroy(): void {
    this.booksSub.unsubscribe();
  }

  getBooks(): Observable<Book[]> {
    return this.books$;
  }

  getBookById(id: number): Observable<Book> {
    return of(this.books.find((book) => book.id === id));
  }

  addBookToStorage(): void {}

  editBook(book: Book): void {
    this.books = [
      ...this.books.filter(locBook => locBook.id !== book.id),
      book
    ];
    this.books$.next(this.books);
  }
}
