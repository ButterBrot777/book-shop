import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from '../../../../models/models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
  // todo: change to onPush strategy

})
export class BookComponent implements OnInit {
  @Input() bookShop: BookModel[];
  @Output() buy = new EventEmitter<number>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  dateToString(time: number): Date {
    return new Date(time);
  }

  buyBook(index: number): void {
    this.buy.emit(index);
    this.cdr.detectChanges();
  }

}
