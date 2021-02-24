import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book.service';
import {BookModel} from '../../models/book-model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public bookList: BookModel[] = [];

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookList = this.bookService.getBooks();
  }


  addBook(event): void {

  }
}
