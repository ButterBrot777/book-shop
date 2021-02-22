import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BookCategories, BookModel} from '../../models/models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  bookShop: BookModel[];
  book1: BookModel = {
    category: BookCategories.Detective,
    createDate: 1613985163289,
    description: '«Walk into the incredible true experience of Billy Hayes, and bring all the courage you can!»',
    isAvailable: true,
    name: 'The Midnight Express',
    price: 100,
    author: 'Agatha Christie ',
  };

  book2: BookModel = {
    category: BookCategories.Fantasy,
    createDate: 1613985163100,
    description: '«From the smallest beginnings come the greatest legends»',
    isAvailable: false,
    name: 'The Hobbit',
    price: 100,
    author: 'Agatha Christie ',
  };

  constructor() { }

  ngOnInit(): void {
    this.bookShop = [this.book1, this.book2];
  }

  dateToString(time: number): Date {
    return new Date(time);
  }

  onBuy(): void {
    console.log('buy this book');
  }

}
