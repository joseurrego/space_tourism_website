import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PeopleComponent } from './people/people.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PlanetasComponent,
    PeopleComponent,
    TecnologiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    PlanetasComponent,
    PeopleComponent,
    TecnologiasComponent
  ]
})
export class SharedModule { }
