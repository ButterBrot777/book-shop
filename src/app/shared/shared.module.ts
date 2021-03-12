import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectiveModule} from './directives';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CartNavComponent} from './components';
import {PipeModule} from './pipes/';

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
