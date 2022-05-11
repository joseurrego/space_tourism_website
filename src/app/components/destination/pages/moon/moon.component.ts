import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/interfaces/interfaces.interfaces';
import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {

  public infoPlaneta: Planeta;

  constructor(private PlanetasService: PlanetasService) { 
    this.infoPlaneta = this.PlanetasService.getInfoMoon;
  }

  ngOnInit(): void {
    console.log(this.infoPlaneta)
  }

}
