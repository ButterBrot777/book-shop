import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {AppPath} from './shared/shared.constants';

export const appRoutes: Routes = [
  {
    path: AppPath.Empty,
    redirectTo: AppPath.Cart
  }
];

@NgModule({
  imports: [],
})
export class AppRoutingModule {}
