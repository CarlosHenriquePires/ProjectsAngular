import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { ListPessoasComponent } from './list-pessoas/list-pessoas.component';
import { EditPessoaComponent } from './edit-pessoa/edit-pessoa.component';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'create-pessoa'},
{path: 'create-pessoa', component: CreatePessoaComponent},
{path: 'list-pessoas', component: ListPessoasComponent},
{path: 'edit-pessoa', component: EditPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
