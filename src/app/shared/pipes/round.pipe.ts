import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {
  transform(value: number, digits: number = 2): number {
    return Math.floor(value * (10 ** digits)) / (10 ** digits);
  }
}
