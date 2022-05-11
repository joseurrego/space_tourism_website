import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/interfaces/interfaces.interfaces';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-spaceport',
  templateUrl: './spaceport.component.html',
  styles: [
  ]
})
export class SpaceportComponent implements OnInit {

  public infoTecnologia: Technology;

  constructor( public technologyService: TechnologyService ) {
    this.infoTecnologia = this.technologyService.getInfoSpaceport
   }

  ngOnInit(): void {
  }

}
