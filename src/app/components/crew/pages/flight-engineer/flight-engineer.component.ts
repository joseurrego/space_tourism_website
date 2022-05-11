import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/interfaces/interfaces.interfaces';
import { CrewsService } from 'src/app/services/crews.service';

@Component({
  selector: 'app-flight-engineer',
  templateUrl: './flight-engineer.component.html',
  styles: [
  ]
})
export class FlightEngineerComponent implements OnInit {

  public infoPersona: Crew;

  constructor(public crewService: CrewsService) {
    this.infoPersona = crewService.getInfoFlightEnginner;
   }

  ngOnInit(): void {
  }

}
