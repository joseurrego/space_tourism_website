import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundImage = 
    'url(./assets/technology/background-technology-desktop.jpg)';
  }

  ngOnInit(): void {
  }

}
