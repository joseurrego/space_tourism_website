import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/interfaces/interfaces.interfaces';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  @Input() infoPersona!: Crew;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
