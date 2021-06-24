import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';
import { TestingPipesComponent } from './testing-pipes/testing-pipes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { LogService } from './log.service';
import { FuncionarioModule } from './funcionario/funcionario.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    TestingPipesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavegacaoModule,
    FuncionarioModule
  ],
  providers: [
      LogService,
      { provide: 'logPrefixo', useValue: 'Console log'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
