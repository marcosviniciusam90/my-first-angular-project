import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade.model';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.css']
})
export class RequisicoesComponent implements OnInit {

    cidades: Cidade[] = [];

    constructor(private cidadeService: CidadeService) {}

      ngOnInit(): void {
        this.consultar();
      }

      consultar(): void {
        this.cidadeService.consultar()
        .then(cidades => {
            this.cidades = cidades;
        });
      }

      adicionar(nome: string): void {
        this.cidadeService.adicionar({ nome: nome })
            .then(response => {
                const cidade: Cidade = response;
                //alert(`Cidade ${cidade.nome} adicionada com código ${cidade.id}`);
                this.consultar();
            });
      }

      excluir(id: number): void {
        alert(id);
      }

      atualizar(cidade: any): void {
        alert(JSON.stringify(cidade));
      }

}
