import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BookCategories, BookModel} from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  // _bookShop: BookModel[];
  title = 'book-shop';
  testTitle = 'book-test';
  @Input() cart: BookModel[] = [];

  // @Input() set bookShop(value) {
  //   this._bookShop = value;
  //   this.cdr.markForCheck();
  // }

  // tslint:disable-next-line:variable-name
  @Input() _bookShop: BookModel[];

  book1: BookModel = {
    id: 1,
    isInCart: false,
    category: BookCategories.Detective,
    createDate: 1613985163289,
    description: '«Walk into the incredible true experience of Billy Hayes, and bring all the courage you can!»',
    isAvailable: true,
    name: 'The Midnight Express',
    price: 100,
    author: 'Agatha Christie ',
  };

  book2: BookModel = {
    id: 2,
    isInCart: false,
    category: BookCategories.Fantasy,
    createDate: 1613985163100,
    description: '«From the smallest beginnings come the greatest legends»',
    isAvailable: true,
    name: 'The Hobbit',
    price: 100,
    author: 'Agatha Christie ',
  };

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._bookShop = [this.book1, this.book2, this.book1];
  }

  onBuy(index: number): void {
    console.log('on buy: ', this._bookShop);
    this.cart.push(this._bookShop[index]);
    this._bookShop[index].isInCart = true;
    console.log('cart from app: ', this.cart);
    console.log('after buy: ', this._bookShop);
  }

  setBackIntoShop(id): void {
    console.log('initial: ', this._bookShop);
    console.log('set back into shop');
    const bookShop = this._bookShop;
    bookShop.forEach(book => {
      if (book.id === id) {
        console.log('ok');
        book.isInCart = false;
        console.log(this._bookShop);
      }
    });
    console.log('after shange: ', bookShop);
    this._bookShop = bookShop;
    this.cdr.detectChanges();
  }

}
