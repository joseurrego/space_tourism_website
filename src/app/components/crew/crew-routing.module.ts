import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommanderComponent } from './pages/commander/commander.component';
import { FlightEngineerComponent } from './pages/flight-engineer/flight-engineer.component';
import { MissionSpecialistComponent } from './pages/mission-specialist/mission-specialist.component';
import { PilotComponent } from './pages/pilot/pilot.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'commander',
        component: CommanderComponent
      },
      {
        path: 'missionEspecialist',
        component: MissionSpecialistComponent
      },
      {
        path: 'pilot',
        component: PilotComponent
      },
      {
        path: 'flightEngineer',
        component: FlightEngineerComponent
      },
      {
        path: '**',
        redirectTo: 'commander'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewRoutingModule { }
