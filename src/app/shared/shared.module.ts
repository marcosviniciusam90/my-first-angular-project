import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampoColoridoDirective } from './campo-colorido.directive';

@NgModule({
  declarations: [
    CampoColoridoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CampoColoridoDirective
  ]
})
export class SharedModule { }
