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

  countries = [
    {
      name: 'product1',
      price: 198,
      rating: 1
    },
    {
      name: 'product2',
      price: 200,
      rating: 5
    },
    {
      name: 'product3',
      price: 200,
      rating: 2
    },
    {
      name: 'product4',
      price: 10,
      rating: 3
    },
    {
      name: 'product5',
      price: 200,
      rating: 3
    },
    {
      name: 'product6',
      price: 400,
      rating: 5
    }
  ];

  sortOptions = [
    {id: 1, option: 'name'},
    {id: 2, option: 'price'},
    {id: 3, option: 'rating'},
  ];
  sortDirection = [
    {id: 1, name: 'descending'},
    {id: 2, name: 'ascending'},
  ];
  opt = 'name';
  dir = false;

  get selectedSortOption(): string {
    return this.opt;
  }

  get selectedDirectionOption(): boolean {
    return this.dir;
  }

  form = new FormGroup({
    sortParams: new FormControl('', Validators.required),
    sortDirection: new FormControl('', Validators.required)
  });

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

  changeCountry(e): void {
    this.opt = e.target.value;
  }

  changeDirection(): void {
    this.dir = !this.dir;
  }
}
