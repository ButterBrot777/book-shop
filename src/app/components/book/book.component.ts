import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BookCategories, BookModel} from '../../models/models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  basket: BookModel[];
  book: BookModel = {
    category: BookCategories.Horror,
    createDate: 1613985163289,
    description: 'Lorem ipsum dolor...',
    isAvailable: true,
    name: 'The Midnight Express',
    price: 100,
    author: 'Agatha Christie ',
  };

  constructor() { }

  ngOnInit(): void {
  }

  dateToString(time: number): Date {
    return new Date(time);
  }

  onBuy(): void {}

}
