import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../../core';
import { BookService } from '../../../book-page';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  private readonly bookId: number;
  book: Book;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    bookService: BookService
  ) {
    this.bookId = +activatedRoute.snapshot.params.id;
    this.book = bookService.getBookById(this.bookId);
  }

  ngOnInit(): void {}

  dateToString(time: number): Date {
    return new Date(time);
  }
}
