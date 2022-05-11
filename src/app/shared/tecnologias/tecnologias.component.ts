import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css'],
})
export class TecnologiasComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  changeUrl (tecnologia: string){
    this.router.navigateByUrl(`technology/main/${tecnologia}`)
  }
}
