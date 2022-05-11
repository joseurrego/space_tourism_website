import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interfaces/interfaces.interfaces';
import { CrewsService } from 'src/app/services/crews.service';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styles: [
  ]
})
export class PilotComponent implements OnInit {

  public infoPersona: Crew;

  constructor( public crewService : CrewsService) { 
    this.infoPersona = this.crewService.getInfoPilot;
  }

  ngOnInit(): void {
  }

}
