import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {Book} from '../../models';
import {AuthService, AppPath} from '../../../core';
import {Router} from '@angular/router';

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
  edit = AppPath.Edit;
  product = AppPath.Product;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  dateToString(time: number): Date {
    return new Date(time);
  }

  addBook(): void {
    this.add.emit(this.book);
  }

  show(): void {
    this.router.navigate(['/admin/product', this.book.id], {
      queryParams: this.book
    });
  }
}
