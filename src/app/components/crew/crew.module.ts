import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrewRoutingModule } from './crew-routing.module';

import { MainComponent } from './main/main.component';
import { CommanderComponent } from './pages/commander/commander.component';
import { MissionSpecialistComponent } from './pages/mission-specialist/mission-specialist.component';
import { PilotComponent } from './pages/pilot/pilot.component';
import { FlightEngineerComponent } from './pages/flight-engineer/flight-engineer.component';
import { StructureComponent } from './pages/structure/structure.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    CommanderComponent,
    MissionSpecialistComponent,
    PilotComponent,
    FlightEngineerComponent,
    StructureComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule,
    SharedModule
  ]
})
export class CrewModule { }
