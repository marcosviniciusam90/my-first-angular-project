import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: 'input'
  // dessa forma aplicaria em todos input sem nem precisar adicionar o seletor no elemento
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo = '';

  @HostListener('focus') onFocus(): void {
    this.corDeFundo = 'yellow';
  }

  @HostListener('blur') onBlur(): void {
    this.corDeFundo = 'transparent';
  }
}
