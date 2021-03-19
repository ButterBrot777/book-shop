import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {BookService} from '../../book-page/services';
import {Book} from '../models';

@Injectable({providedIn: 'root'})
export class BookResolver implements Resolve<Book> {

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Book> | Promise<Book> | Book {
    return this.bookService.getBookById(+route.params.id);
  }
}
