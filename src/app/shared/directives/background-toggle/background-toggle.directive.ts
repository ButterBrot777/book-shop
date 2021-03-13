import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBGToggle]'
})
export class BackgroundToggleDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = '#f3eded';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = '';
  }
}
