import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartItemComponent } from './cart-page/components/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-page/components/book-list/book-list.component';
import { CartListComponent } from './cart-page/components/cart-list/cart-list.component';
import { BookItemComponent } from './book-page/components/book-item/book-item.component';
import {LocalStorageService} from './core/services/local-storage.service';
import {ConstantsService} from './core/services/constants.service';
import {ConfigOptionsService} from './core/services/config-options.service';
import {GeneratorFactory, GeneratorService} from './core/services/generator.service';
import { AboutComponent } from './layout/components/about/about.component';
import {CartModule} from './cart-page/cart.module';
import {BooksModule} from './book-page/books.module';
import {OrdersModule} from './orders-page/orders.module';
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
