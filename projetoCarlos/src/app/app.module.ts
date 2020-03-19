import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { ListPessoasComponent } from './list-pessoas/list-pessoas.component';
import { EditPessoaComponent } from './edit-pessoa/edit-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePessoaComponent,
    ListPessoasComponent,
    EditPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
