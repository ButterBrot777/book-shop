import {Directive, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appBGToggle]'
})
export class BGToggleDirective {
  private backgroundColor: string;

  constructor(private element: ElementRef, private renderer: Renderer2){

    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostBinding('style.backgroundColor') get getBackgroundColor(): string {
    return this.backgroundColor;
  }

  // this way is the same as in constructor via renderer to set cursor pointer
  // @HostBinding('style.cursor') get getCursor(): string {
  //   return 'pointer';
  // }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.backgroundColor = '#f3eded';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.backgroundColor = 'white';
  }
}
