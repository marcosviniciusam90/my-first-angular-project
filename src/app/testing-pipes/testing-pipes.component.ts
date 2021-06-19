import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-pipes',
  templateUrl: './testing-pipes.component.html',
  styleUrls: ['./testing-pipes.component.css']
})
export class TestingPipesComponent {

    nome = 'Marcos Mendonça';
    dataAniversario = new Date(1990, 10, 19);
    preco = 12855.32;
    troco = 0.57392;

}
