import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnClick]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(click)': 'toggleHighlight()',
  }
})
export class HighlightOnClickDirective implements AfterViewInit{
  @Input() backgroundColor = '#28a745';
  @Input() borderWidth = '2px';
  @Input() borderColor = 'yellow';

  private isInitialState = true;

  private initialBackgroundColor: string;
  private initialBorderWidth: string;
  private initialBorderColor: string;
  private initialBorderStyle: string;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    this.initialBackgroundColor = this.elementRef.nativeElement.style.backgroundColor;
    this.initialBorderColor = this.elementRef.nativeElement.style.borderColor;
    this.initialBorderWidth = this.elementRef.nativeElement.style.borderWidth;
    this.initialBorderStyle = this.elementRef.nativeElement.style.borderStyle;
  }

  toggleHighlight(): void {
    this.isInitialState = !this.isInitialState;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.isInitialState
        ? this.backgroundColor
        : this.initialBackgroundColor,
    );

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'outlineStyle',
      this.isInitialState ? 'solid' : this.initialBorderStyle,
    );

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'outlineWidth',
      this.isInitialState ? this.borderWidth : this.initialBorderWidth,
    );

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'outlineColor',
      this.isInitialState ? this.borderColor : this.initialBorderColor,
    );
  }
}
