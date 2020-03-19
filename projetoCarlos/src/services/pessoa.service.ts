import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaModel } from 'src/models/pessoaModel';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

// Resgata todas as  Pessoas
getPessoas(): Observable<PessoaModel> {
  return this.http.get<PessoaModel>(this.apiURL + '/pessoas');
}

//Cria uma  Pessoa
createPessoa(dados): Observable<PessoaModel> {
  return this.http.post<PessoaModel>(this.apiURL + '/pessoas', JSON.stringify(dados), this.httpOptions)
}

  // Resgata os Dados de uma Pessoa
  getPessoa(id): Observable<PessoaModel> {
    return this.http.get<PessoaModel>(this.apiURL + '/pessoas/' + id)
  }

  // Atualiza de uma Pessoa
  updatePessoa(id, pessoa): Observable<PessoaModel> {
    return this.http.put<PessoaModel>(this.apiURL + '/pessoas/' + id, JSON.stringify(pessoa), this.httpOptions)
  }

  // Delete uma Pessoa
  deletePessoa(id) {
    return this.http.delete<PessoaModel>(this.apiURL + '/pessoas/' + id, this.httpOptions)
  }

}
