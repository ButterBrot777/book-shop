import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book.service';
import {Book} from '../../models/book-model';
import {CartService} from '../../../cart-page/cart.service';
import {Observable} from 'rxjs';
import bookStorage from '../../models/book-store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$: Observable<Book[]>;

  constructor(
    private bookService: BookService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBooks();
    // console.log('from book-page list component: ', this.boo)
  }

  addBook(book: Book): void {
    this.cartService.addBook(book.id);
  }
}
