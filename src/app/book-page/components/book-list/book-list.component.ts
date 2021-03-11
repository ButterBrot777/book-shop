import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book-model';
import {CartService} from '../../../cart-page/services/cart.service';
import {Observable, Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  bookList$: Observable<Book[]>;
  bookList: Book[];

  private subscription: Subscription;

  constructor(
    private bookService: BookService,
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBooks();
    this.subscription = this.bookList$.subscribe((books: Book[]) => this.bookList = books);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addBook(book: Book): void {
    this.cartService.addBook(book.id);
  }
}
