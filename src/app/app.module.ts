import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { CartItemComponent } from './components/cart/components/cart-item/cart-item.component';
// import { BookListComponent } from './components/book/components/book-list/book-list.component';
// import { CartListComponent } from './components/cart/components/cart-list/cart-list.component';
// import { BookItemComponent } from './components/book/components/book-item/book-item.component';
import { AboutComponent } from './layout/components/about/about.component';
import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppComponent,
    // CartItemComponent,
    // BookListComponent,
    // CartListComponent,
    // BookItemComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, FormsModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
