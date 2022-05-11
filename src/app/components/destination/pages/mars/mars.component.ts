import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/interfaces/interfaces.interfaces';
import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  public infoPlaneta: Planeta;

  constructor( public planetasServices: PlanetasService) {
    this.infoPlaneta = planetasServices.getInfoMars;
   }

  ngOnInit(): void {
  }

}
