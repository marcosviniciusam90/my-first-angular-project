import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { TestingPipesComponent } from './testing-pipes/testing-pipes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { FuncionarioService } from './funcionario.service';
import { FuncionarioAbreviadoService } from './funcionario-abreviado.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    TestingPipesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavegacaoModule
  ],
  providers: [
      { provide: FuncionarioService, useClass: FuncionarioAbreviadoService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
