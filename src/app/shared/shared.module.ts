import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectiveModule} from './directives/directive.module';
import {OrderByPipe} from './pipes';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DirectiveModule
  ],
  declarations: [
    OrderByPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    OrderByPipe,
  ],
  providers: [
    OrderByPipe,
  ],
})
export class SharedModule {}
