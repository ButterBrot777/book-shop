import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Book} from '../../models/book-model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() add = new EventEmitter<Book>();

  isPrimary = true;

  constructor() { }

  ngOnInit(): void {
  }

  dateToString(time: number): Date {
    return new Date(time);
  }

  addBook(): void {
    this.add.emit(this.book);
  }
}
