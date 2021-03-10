import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnClick]',
})
export class HighlightOnClickDirective implements OnInit {
  @Input() backgroundColor: string;
  @Input() borderWidth: string;
  @Input() borderColor: string;

  private isInitialState = true;

  private initialBackgroundColor: string;
  private initialBorderWidth: string;
  private initialBorderColor: string;
  private initialBorderStyle: string;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  ngOnInit(): void {
    this.initialBackgroundColor = this.elementRef.nativeElement.style.backgroundColor;
    this.initialBorderColor = this.elementRef.nativeElement.style.borderColor;
    this.initialBorderWidth = this.elementRef.nativeElement.style.borderWidth;
    this.initialBorderStyle = this.elementRef.nativeElement.style.borderStyle;
  }

  @HostListener('click') onClick(): void {
    this.toggleHighlight();
  }

  private changeBackgroundColor(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.isInitialState
        ? this.backgroundColor
        : this.initialBackgroundColor,
    );
  }

  private changeOutlineStyle(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'outlineStyle',
      this.isInitialState ? 'solid' : this.initialBorderStyle,
    );
  }

  private changeOutlineWidth(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'outlineWidth',
      this.isInitialState ? this.borderWidth : this.initialBorderWidth,
    );
  }

  private changeOutlineColor(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'outlineColor',
      this.isInitialState ? this.borderColor : this.initialBorderColor,
    );
  }

  toggleHighlight(): void {
    this.changeBackgroundColor();
    this.changeOutlineStyle();
    this.changeOutlineWidth();
    this.changeOutlineColor();

    this.isInitialState = !this.isInitialState;
  }
}
