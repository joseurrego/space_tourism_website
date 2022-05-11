import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { MoonComponent } from './pages/moon/moon.component';
import { TitanComponent } from './pages/titan/titan.component';
import { EuropaComponent } from './pages/europa/europa.component';
import { MarsComponent } from './pages/mars/mars.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: "moon",
        component: MoonComponent
      },
      {
        path: "mars",
        component: MarsComponent
      },
      {
        path: "europa",
        component: EuropaComponent
      },
      {
        path: "titan",
        component: TitanComponent
      },
      {
        path: "**",
        redirectTo: 'moon'
      }
    ]
  },
  // {
  //   path: "**",
  //   redirectTo: "main",
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
