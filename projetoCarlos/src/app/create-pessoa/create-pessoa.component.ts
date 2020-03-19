import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {

  @Input() pessoa = {nome: '', endereco: '', dataNascimento: '', cpf: '', sexo: '', estadoCivil: ''}

  constructor(
    public pessoaService: PessoaService,
    public router: Router
  ) { }

  ngOnInit() { }

  addPessoa(dataPessoa) {
    this.pessoaService.createPessoa(this.pessoa).subscribe((data: {}) => {
      this.router.navigate(['/list-pessoas'])
    })

}
}
