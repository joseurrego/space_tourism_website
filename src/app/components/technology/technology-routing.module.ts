import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LaunchVehicleComponent } from './pages/launch-vehicle/launch-vehicle.component';
import { SpaceCapsuleComponent } from './pages/space-capsule/space-capsule.component';
import { SpaceportComponent } from './pages/spaceport/spaceport.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'launch-vehicle',
        component: LaunchVehicleComponent
      },
      {
        path: 'spaceport',
        component: SpaceportComponent
      },
      {
        path: 'space-capsule',
        component: SpaceCapsuleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
