import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectiveModule} from './directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    DirectiveModule,
  ],
  providers: [],
})
export class SharedModule {}
