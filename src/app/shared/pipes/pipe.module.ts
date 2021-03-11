import {NgModule} from '@angular/core';
import {RoundPipe} from './round.pipe';
import {OrderByPipe} from './order-by.pipe';

@NgModule({
  imports: [],
  declarations: [
    OrderByPipe,
    RoundPipe,
  ],
  exports: [
    OrderByPipe,
    RoundPipe,
  ],
  providers: [
    OrderByPipe,
    RoundPipe,
  ]
})
export class PipeModule {}
