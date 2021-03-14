import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {Book} from '../../models/book-model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() add = new EventEmitter<Book>();

  isPrimary = true;

  constructor() { }

  dateToString(time: number): Date {
    return new Date(time);
  }

  addBook(): void {
    this.add.emit(this.book);
  }
}
