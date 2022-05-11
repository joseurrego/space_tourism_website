import { Component, OnInit } from '@angular/core';

import { Planeta } from 'src/app/interfaces/interfaces.interfaces';
import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.css']
})
export class TitanComponent implements OnInit {

  public infoPlaneta: Planeta;

  constructor(public planetasService: PlanetasService) { 
    this.infoPlaneta = planetasService.getInfoTitan;
  }

  ngOnInit(): void {
  }

}
