import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  exportAs: 'campoColorido',
  selector: '[appCampoColorido]'
  // selector: 'input'
  // dessa forma aplicaria em todos input sem nem precisar adicionar o seletor no elemento
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo = '';

  @HostListener('focus') colorir(): void {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir(): void {
    this.corDeFundo = 'transparent';
  }
}
