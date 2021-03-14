import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppPath} from './core';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    pathMatch: 'full',
  },
  {
    path: AppPath.Cart,
    loadChildren: () =>
      import('./cart-page/cart.module').then(m => m.CartModule)
  },
  {
    path: AppPath.Books,
    loadChildren: () =>
      import('./book-page/books.module').then(m => m.BooksModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
