import { NgModule } from '@angular/core';

import { HighlightOnClickDirective } from './highlight-on-click';
import { BackgroundToggleDirective } from './background-toggle';

@NgModule({
  declarations: [HighlightOnClickDirective, BackgroundToggleDirective],
  exports: [HighlightOnClickDirective, BackgroundToggleDirective],
})
export class DirectiveModule {}
