import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { BGToggleDirective } from './directives/bgtoggle.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [BGToggleDirective],
  exports: [
    CommonModule,
    RouterModule,
    BGToggleDirective,
  ],
  providers: [],
})
export class SharedModule {}
