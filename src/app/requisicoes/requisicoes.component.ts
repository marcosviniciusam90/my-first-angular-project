import { Component } from '@angular/core';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.css']
})
export class RequisicoesComponent {

    cidades = [
        { id: 1, nome: 'Uberlândia' },
        { id: 2, nome: 'São Paulo' },
        { id: 3, nome: 'Florianópolis' },
        { id: 4, nome: 'Curitiba' }
      ];

      adicionar(nome: string): void {
        alert(nome);
      }

      excluir(id: number): void {
        alert(id);
      }

      atualizar(cidade: any): void {
        alert(JSON.stringify(cidade));
      }

}
