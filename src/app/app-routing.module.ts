import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationModule } from './components/destination/destination.module';
import { PrincipalComponent } from './components/home/principal/principal.component';

const route: Routes = [
    {
        path: 'home',
        component: PrincipalComponent,
    },
    {
        path: "destino",
        loadChildren:()=> import('./components/destination/destination.module').then(m =>DestinationModule)
    },
    {
        path: "crew",
        loadChildren: () => import('./components/crew/crew.module').then(m => m.CrewModule)
    },
    {
        path: "technology",
        loadChildren: () => import('./components/technology/technology.module').then(m => m.TechnologyModule)
    },
    // {
    //     path: '**',
    //     redirectTo: 'home'
    // }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
})

export class AppRoutingModule {}