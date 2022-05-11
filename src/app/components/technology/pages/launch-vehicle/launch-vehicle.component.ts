import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/interfaces/interfaces.interfaces';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-launch-vehicle',
  templateUrl: './launch-vehicle.component.html',
  styles: [
  ]
})
export class LaunchVehicleComponent implements OnInit {

  public infoTecnologia: Technology;

  constructor(public technologyService: TechnologyService) { 
    this.infoTecnologia = this.technologyService.getInfoLaunchVehicle
  }

  ngOnInit(): void {
  }

}
