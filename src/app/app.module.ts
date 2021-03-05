import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartItemComponent } from './components/cart/components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './components/book/components/book-list/book-list.component';
import { CartListComponent } from './components/cart/components/cart-list/cart-list.component';
import { BookItemComponent } from './components/book/components/book-item/book-item.component';
import {LocalStorageService} from './core/services/local-storage.service';
import {ConstantsService} from './core/services/constants.service';
import {ConfigOptionsService} from './core/services/config-options.service';
import {GeneratorFactory, GeneratorService} from './core/services/generator.service';
import { AboutComponent } from './layout/components/about/about.component';
import {CartModule} from './components/cart/cart.module';
import {BooksModule} from './components/book/books.module';
import {OrdersModule} from './components/orders/orders.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CartModule,
    BooksModule,
    OrdersModule,
  ],
  providers: [
    {provide: LocalStorageService, useClass: LocalStorageService},
    {provide: ConstantsService, useValue: ConstantsService},
    ConfigOptionsService,
    {provide: GeneratorService, useFactory: GeneratorFactory(3), deps: [GeneratorService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
