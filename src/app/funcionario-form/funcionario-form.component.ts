import { Component } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

    nome = '';
    adicionado = false;

    constructor(
        private funcionarioService: FuncionarioService,
        private logService: LogService) { }

    adicionar(): void {
        this.logService.log(`Adicionando ${this.nome}`);
        this.funcionarioService.adicionar(this.nome);
        this.adicionado = true;
    }
}
