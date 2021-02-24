import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/components/book/book.component';
import { CartItemComponent } from './components/cart/components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './components/book/components/book-list/book-list.component';
import { CartListComponent } from './components/cart/components/cart-list/cart-list.component';
import { BookItemComponent } from './components/book/components/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartItemComponent,
    CartComponent,
    BookListComponent,
    CartListComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
