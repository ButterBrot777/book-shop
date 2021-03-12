import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppPath} from './shared/shared.constants';

export const appRoutes: Routes = [
  {
    path: AppPath.Empty,
    redirectTo: AppPath.Books,
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
