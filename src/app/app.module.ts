import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CartModule} from './cart-page/cart.module';
import {BooksModule} from './book-page/books.module';
import {OrdersModule} from './orders-page/orders.module';
import {SharedModule} from './shared/shared.module';

import {LocalStorageService} from './core/services/local-storage.service';
import {ConstantsService} from './core/constants';
import {ConfigOptionsService} from './core/services/config-options.service';
import {GeneratorFactory, GeneratorService} from './core/services/generator.service';

import {AppComponent} from './app.component';
import {AboutComponent} from './layout/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
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
export class AppModule {
}
