import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectiveModule} from './directives';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from './pipes/';

import {CartNavComponent} from './components';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DirectiveModule,
    PipeModule,
  ],
  declarations: [
    CartNavComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    PipeModule,
  ],
  providers: [],
})
export class SharedModule {
}
