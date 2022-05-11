import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interfaces/interfaces.interfaces';
import { CrewsService } from 'src/app/services/crews.service';

@Component({
  selector: 'app-mission-specialist',
  templateUrl: './mission-specialist.component.html',
  styles: [
  ]
})
export class MissionSpecialistComponent implements OnInit {

  public infoPersona: Crew;

  constructor(public crewService : CrewsService) {
    this.infoPersona = this.crewService.getInfoMissionEspecialist;
   }

  ngOnInit(): void {
  }

}
