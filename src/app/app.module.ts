import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartModule } from './cart-page';
import { BooksModule } from './book-page';
import { OrdersModule } from './orders-page';
import { SharedModule } from './shared';
import { AdminModule } from './admin';
import {
  LocalStorageService,
  ConfigOptionsService,
  ConstantsService,
  GeneratorFactory,
  GeneratorService,
} from './core';
import {
  AboutComponent,
  HeaderComponent,
  PageNotFoundComponent,
  MainLayoutComponent,
} from './layout';
import { ProductCardComponent } from './products-page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MainLayoutComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CartModule,
    BooksModule,
    OrdersModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConstantsService, useValue: ConstantsService },
    ConfigOptionsService,
    {
      provide: GeneratorService,
      useFactory: GeneratorFactory(3),
      deps: [GeneratorService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
