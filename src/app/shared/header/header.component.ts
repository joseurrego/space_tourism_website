import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menu: any;

  constructor( private menuService: MenuService ) { 
    this.menu = this.menuService.enviarMenu;
   }

  ngOnInit(): void {
    // console.log(this.menu)
  }

}
