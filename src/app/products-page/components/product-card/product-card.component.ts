import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../../core';
import { BookService } from '../../../book-page';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, OnDestroy {
  private readonly bookId: number;
  book: Book;
  bookSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
    this.bookId = +activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.bookService.getBookById(this.bookId).subscribe(book => {
      this.book = book;
    });
  }

  ngOnDestroy(): void {
    if (this.bookSubscription) {
      this.bookSubscription.unsubscribe();
    }
  }

  dateToString(time: number): Date {
    return new Date(time);
  }
}
