import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://google.com.br';
  urlImagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png';
  valorAtual: String = '';
  valorSalvo: String = '';
  isMouseOver: Boolean = false;
  nome: String = 'Carlos';

  botaoClicado() {
    alert('Botao Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;

  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}

/**
 * <TEMPLATE>                                                   {COMPONENT}
 *        <-----------------{{ valor }}----------------------------
 *        <-----------------[propriedade]="valor"------------------
 *        -----------------(evento)="handler"--------------------->
 *        <------------[(ngModel)]="propriedade"------------------> Two Way data-binding 
 */