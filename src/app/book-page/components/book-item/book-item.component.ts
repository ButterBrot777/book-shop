import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnDestroy, OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, AppPath, Book } from '../../../core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent implements OnInit, OnDestroy{
  @Input() book: Book;
  @Output() add = new EventEmitter<Book>();

  isPrimary = true;
  // edit = AppPath.Edit;
  product = AppPath.Product;
  isAdmin: boolean;

  private isAdminSubscription: Subscription;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isAdminSubscription = this.authService.isAdminSubject.subscribe(status => this.isAdmin = status);
  }

  ngOnDestroy(): void {
    this.isAdminSubscription.unsubscribe();
  }

  dateToString(time: number): Date {
    return new Date(time);
  }

  addBook(): void {
    this.add.emit(this.book);
  }

  show(): void {
    this.router.navigate(['/admin/product', this.book.id]);
  }
  edit(): void {
    this.router.navigate(['/admin/product', this.book.id, 'edit']);
  }
}
