import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BGToggleDirective } from './directives/bgtoggle.directive';
import { HighlightOnClickDirective } from './directives/highlight-on-click.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BGToggleDirective,
    HighlightOnClickDirective
  ],
  exports: [
    CommonModule,
    BGToggleDirective,
    HighlightOnClickDirective,
  ],
  providers: [],
})
export class SharedModule {}
