import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

import {BookService} from '../../../book-page/services';
import {Book} from '../../../core/models';
import {BookCategories} from '../../../core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  private bookId: number;

  form: FormGroup;
  options = [
    {option: BookCategories.Action},
    {option: BookCategories.Detective},
    {option: BookCategories.Horror},
    {option: BookCategories.Fantasy}
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          this.bookId = +params.id;
          return this.bookService.getBookById(+params.id);
        })
      ).subscribe(book => {
        this.form = new FormGroup({
          name: new FormControl(book.name, Validators.required),
          author: new FormControl(book.author, Validators.required),
          category: new FormControl(book.category, Validators.required),
          description: new FormControl(book.description, Validators.required),
          isAvailable: new FormControl(book.isAvailable, Validators.required),
          price: new FormControl(book.price, Validators.required),
          createDate: new FormControl()
        });
    });
  }

  submitForm(): void {
    const book: Book = {
      ...this.form.value,
      id: this.bookId,
      createDate: Date.now(),
      isInCart: false,
    };
    this.bookService.editBook(book);
    this.router.navigate(['admin', 'products-list']);
  }
}
