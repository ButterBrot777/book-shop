import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CartModule} from './cart-page/cart.module';
import {BooksModule} from './book-page/books.module';
import {OrdersModule} from './orders-page/orders.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorFactory, GeneratorService} from './core';

import {AppComponent} from './app.component';
import {AboutComponent, HeaderComponent} from './layout';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MainLayoutComponent
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
