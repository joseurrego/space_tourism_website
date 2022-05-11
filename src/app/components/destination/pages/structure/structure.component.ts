import { Component, Input, OnInit } from '@angular/core';
import { Planeta } from 'src/app/interfaces/interfaces.interfaces';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  @Input() infoPlaneta!: Planeta;

  constructor() { }

  ngOnInit(): void {
  }

}
