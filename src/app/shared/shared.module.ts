import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectiveModule} from './directives';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipeModule} from './pipes/';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DirectiveModule,
    PipeModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    PipeModule,
  ],
  providers: [],
})
export class SharedModule {}
