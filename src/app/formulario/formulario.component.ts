import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    profissoes = ['Programador', 'Empresário', 'Outra'];
    profissaoPadrao = 'Outra';

    salvar(form: NgForm): any {
        console.log(this.profissaoPadrao);
        console.log(form.value.profissao);
    }

}
