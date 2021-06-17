import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: 'input'
  // dessa forma aplicaria em todos input sem nem precisar adicionar o seletor no elemento
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo = '';

  @HostListener('focus') onFocus(): void {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') onBlur(): void {
    this.corDeFundo = 'transparent';
  }
}
