import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book-model';
import {CartService} from '../../../cart-page/services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList$: Observable<Book[]>;
  bookList: Book[];

  constructor(
    private bookService: BookService,
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBooks();
  }

  addBook(book: Book): void {
    this.cartService.addBook(book.id);
  }
}
