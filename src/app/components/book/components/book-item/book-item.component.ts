import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {BookModel} from '../../models/book-model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: BookModel;
  @Output() add = new EventEmitter<BookModel>();

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
