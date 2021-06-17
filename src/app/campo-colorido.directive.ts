import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: 'input'
  // dessa forma aplicaria em todos input sem nem precisar adicionar o seletor no elemento
})
export class CampoColoridoDirective {

  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2
  ) { }

  @HostListener('focus') onFocus(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
        'background-color', 'yellow');
  }

  @HostListener('blur') onBlur(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
        'background-color', 'transparent');
  }
}
