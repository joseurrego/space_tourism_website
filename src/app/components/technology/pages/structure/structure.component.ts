import { Component, Input, OnInit } from '@angular/core';
import { Technology } from 'src/app/interfaces/interfaces.interfaces';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  @Input() infoTecnologia!: Technology;

  constructor() { }

  ngOnInit(): void {
    this.marcarMenu();
  }

  marcarMenu() {
    const menuTecnologias = document.querySelectorAll('.tecnologia');
    menuTecnologias.forEach(element => {
      if (this.infoTecnologia.name.includes(element.classList[element.classList.length - 1 ])) {
        element.classList.add('navTecnologia')
      }
    });
  }

}
