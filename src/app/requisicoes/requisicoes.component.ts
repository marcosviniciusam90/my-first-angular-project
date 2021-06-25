import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';

class Cidade {
    id = 0;
    nome = '';
}

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.css']
})
export class RequisicoesComponent implements OnInit {

    cidades: Cidade[] = [];

    constructor(private cidadeService: CidadeService) {}

    ngOnInit(): void {
        this.cidadeService.consultar()
            .then(cidades => {
                this.cidades = cidades;
            });
    }

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
