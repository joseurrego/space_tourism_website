import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextoComponent } from './texto/texto.component';
import { BotonComponent } from './boton/boton.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ TextoComponent, BotonComponent, PrincipalComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TextoComponent,
    BotonComponent
  ]
})
export class HomeModule { }
