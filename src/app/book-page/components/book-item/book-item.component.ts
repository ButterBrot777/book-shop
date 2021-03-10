import {Component, Input, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Book} from '../../models/book-model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit, OnDestroy {
  @Input() book: Book;
  @Output() add = new EventEmitter<Book>();

  isPrimary = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Book was destroyed');
  }

  dateToString(time: number): Date {
    return new Date(time);
  }

  addBook(): void {
    this.add.emit(this.book);
  }
}
