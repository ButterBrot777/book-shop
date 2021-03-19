import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book, BookCategories} from '../../../core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookService} from '../../../book-page/services';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  private bookId: number;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    isAvailable: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    createDate: new FormControl()
  });

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
  }

  submitForm(): void {
    const book: Book = {
      ...this.form.value,
      id: this.bookId,
      createDate: Date.now(),
      isInCart: false,
    };
    this.bookService.addNewBook(book);
    this.router.navigate(['admin', 'products-list']);
  }
}
