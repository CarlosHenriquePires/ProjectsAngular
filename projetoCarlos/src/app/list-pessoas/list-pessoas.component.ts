import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-list-pessoas',
  templateUrl: './list-pessoas.component.html',
  styleUrls: ['./list-pessoas.component.css']
})
export class ListPessoasComponent implements OnInit {

  Pessoa: any = [];

  constructor(
    public pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.loadPessoas()
  }

  // Get pessoas
  loadPessoas() {
    return this.pessoaService.getPessoas().subscribe((data: {}) => {
      this.Pessoa = data;
    })
  }

  // Delete pessoa
  deleteEmployee(id) {
    if (window.confirm('Deseja realmente remover esssa pessoa?')){
      this.pessoaService.deletePessoa(id).subscribe(data => {
        this.loadPessoas()
      })
    }
  }  


}
