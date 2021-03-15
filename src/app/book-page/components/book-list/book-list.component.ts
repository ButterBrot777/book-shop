import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../../core';
import { BookService } from '../../services';
import { CartService } from '../../../cart-page';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList$: Observable<Book[]>;
  bookList: Book[];

  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBooks();
  }

  addBook(book: Book): void {
    this.cartService.addBook(book.id);
  }
}
