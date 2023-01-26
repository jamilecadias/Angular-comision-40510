import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})
export class DirectivaPersonalizadaDirective {

  constructor(
    private rederer: Renderer2,
    private elementRef: ElementRef
  ) {
    rederer.setStyle(elementRef.nativeElement, 'background-color', 'gray');

  }

}
