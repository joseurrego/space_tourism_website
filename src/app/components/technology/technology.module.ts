import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { MainComponent } from './main/main.component';
import { StructureComponent } from './pages/structure/structure.component';
import { LaunchVehicleComponent } from './pages/launch-vehicle/launch-vehicle.component';
import { SpaceportComponent } from './pages/spaceport/spaceport.component';
import { SpaceCapsuleComponent } from './pages/space-capsule/space-capsule.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    StructureComponent,
    LaunchVehicleComponent,
    SpaceportComponent,
    SpaceCapsuleComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    SharedModule,
  ]
})
export class TechnologyModule { }
