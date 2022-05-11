import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MainComponent } from './main/main.component';
import { MoonComponent } from './pages/moon/moon.component';
import { TitanComponent } from './pages/titan/titan.component';
import { StructureComponent } from './pages/structure/structure.component';
import { MarsComponent } from './pages/mars/mars.component';
import { EuropaComponent } from './pages/europa/europa.component';


@NgModule({
  declarations: [
    MainComponent,
    MoonComponent,
    TitanComponent,
    StructureComponent,
    MarsComponent,
    EuropaComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule
  ]
})
export class DestinationModule { }
