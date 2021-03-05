import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { BGToggleDirective } from './directives/bgtoggle.directive';
import { HighlightOnClickDirective } from './directives/highlight-on-click.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    BGToggleDirective,
    HighlightOnClickDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    BGToggleDirective,
    HighlightOnClickDirective,
  ],
  providers: [],
})
export class SharedModule {}
