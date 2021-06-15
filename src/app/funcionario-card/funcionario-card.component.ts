import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;
  //@Input('obj')  -> dessa forma, no componente externo usariamos o alias 'obj'. Exemplo:
  // <app-funcionario-card [obj]="f"></app-funcionario-card>
}
