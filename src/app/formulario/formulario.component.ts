import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// poderia criar a classe num arquivo TS separado
class Cliente {
    nome = '';
    email = '';
    profissao = '';
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    cliente = new Cliente();

    profissoes = ['Programador', 'Empresário', 'Outra'];

    salvar(form: NgForm): any {
        console.log(form);

        form.reset({ fullName: 'Marcos', profession: '' });
    }

}
