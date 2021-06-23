export class FuncionarioService {

    ultimoId = 1;
    funcionarios = [{ id: 1, nome: 'João' }];

    adicionar(nome: string): void {
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
