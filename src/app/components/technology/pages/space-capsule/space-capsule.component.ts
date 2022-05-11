import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/interfaces/interfaces.interfaces';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-space-capsule',
  templateUrl: './space-capsule.component.html',
  styles: [
  ]
})
export class SpaceCapsuleComponent implements OnInit {

  public infoTecnologia: Technology;

  constructor( public technologyService: TechnologyService ) {
    this.infoTecnologia = this.technologyService.getInfoSpaceCapsule
  }

  ngOnInit(): void {
  }

}
