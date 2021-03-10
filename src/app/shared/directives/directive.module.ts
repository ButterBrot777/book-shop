import {NgModule} from '@angular/core';
import {HighlightOnClickDirective} from './highlight-on-click/highlight-on-click.directive';
import {BackgroundToggleDirective} from './background-toggle/background-toggle.directive';

@NgModule({
  imports: [],
  declarations: [
    HighlightOnClickDirective,
    BackgroundToggleDirective,
  ],
  exports: [
    HighlightOnClickDirective,
    BackgroundToggleDirective,
  ],
  providers: [],
})
export class DirectiveModule {}
