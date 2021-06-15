import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  ultimoId = 1;
  nome = 'Marcos';
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();
  //@Output('adicionado') funcionarioAdicionado = new EventEmitter();

  adicionar() {
    this.adicionado = true;

    const funcionario = {
      id: this.ultimoId++,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }
}
