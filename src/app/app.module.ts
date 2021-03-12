import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CartModule} from './cart-page/cart.module';
import {BooksModule} from './book-page/books.module';
import {OrdersModule} from './orders-page/orders.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LocalStorageService} from './core/services';
import {ConstantsService} from './core';
import {ConfigOptionsService} from './core/services';
import {GeneratorFactory, GeneratorService} from './core/services';

import {AppComponent} from './app.component';
import {AboutComponent} from './layout/about';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './layout/header';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CartModule,
    BooksModule,
    OrdersModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: LocalStorageService, useClass: LocalStorageService},
    {provide: ConstantsService, useValue: ConstantsService},
    ConfigOptionsService,
    {provide: GeneratorService, useFactory: GeneratorFactory(3), deps: [GeneratorService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
