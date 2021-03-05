import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BookCategories, BookModel} from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-shop';
  testTitle = 'book-test';

  constructor() {
  }

}
