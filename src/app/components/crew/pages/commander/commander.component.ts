import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/interfaces/interfaces.interfaces';
import { CrewsService } from 'src/app/services/crews.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styles: [
  ]
})
export class CommanderComponent implements OnInit {

  public infoPersona : Crew;

  constructor(public crewsService: CrewsService) { 
      this.infoPersona = crewsService.getInfoCommander;
   }

  ngOnInit(): void {
  }

}
