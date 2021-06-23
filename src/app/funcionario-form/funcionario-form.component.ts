import { Component, EventEmitter, Output } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

    nome = '';
    adicionado = false;

    funcionarioService: FuncionarioService;

    constructor() {
        this.funcionarioService = new FuncionarioService();
    }

    adicionar(): void {
        this.funcionarioService.adicionar(this.nome);
        this.adicionado = true;
    }
}
