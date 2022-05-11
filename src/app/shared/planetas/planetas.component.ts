import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  changeUrl (planeta: string){
    this.router.navigateByUrl(`destino/main/${planeta}`)
  }

}
