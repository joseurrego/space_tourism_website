import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/interfaces/interfaces.interfaces';
import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.css']
})
export class EuropaComponent implements OnInit {

  public infoPlaneta: Planeta;

  constructor(public planetaService: PlanetasService) {
    this.infoPlaneta = planetaService.getInfoEuropa;
   }

  ngOnInit(): void {
  }

}
