import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class FuncionarioService {

    ultimoId = 1;
    funcionarios = [{ id: 1, nome: 'João' }];

    constructor(private logService: LogService) {}

    adicionar(nome: string): void {

      this.logService.log(`Adicionando nome ${nome}`);
      const funcionario = {
        id: ++this.ultimoId,
        nome
      };

      this.funcionarios.push(funcionario);
      console.log(JSON.stringify(this.funcionarios));
    }

    consultar(): any {
      return this.funcionarios;
    }

  }
