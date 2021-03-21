import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  containerWidth : string   = `${window.innerWidth-40}px`;

  changeContainerWidth() {
    this.containerWidth =`${window.innerWidth-40}px`; 
  }

  ngOnInit(): void {
  }

}
