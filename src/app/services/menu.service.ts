import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/interfaces.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menu : Menu[] = [
    {
      numero: '00',
      titulo: 'Home',
      url: './home'
    },
    {
      numero: '01',
      titulo: 'Destination',
      url: './destino/main/moon'
    },
    {
      numero: '02',
      titulo: 'Crew',
      url: './crew/main/commander'
    },
    {
      numero: '03',
      titulo: 'Technology',
      url: './technology/main/launch-vehicle'
    },
  ];

  constructor() { }

  get enviarMenu(): Menu[] {
    return this.menu;
  }
}
